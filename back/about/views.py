from django.contrib.auth import authenticate
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from pytz import unicode

from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from about.serializers import UserSerializer, FileSerializer
from about.models import User, UploadedFile


def authenticate_wrapper(username, password):
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=404)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},
                    status=200)


@csrf_exempt
@ensure_csrf_cookie
@api_view(['POST'])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=400)
    return authenticate_wrapper(username=username, password=password)


@csrf_exempt
@api_view(['DELETE'])
def logout(request):
    if not request.user.is_anonymous:
        try:
            Token.objects.get(user=request.user).delete()
        except Token.DoesNotExist:
            pass
    return Response(status=200)


class SessionView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request, format=None):
        content = {
            'user': unicode(request.user),
            'auth': unicode(request.auth),
        }
        return Response(content)


class UserFromSession(APIView):
    model = User
    serializer_class = UserSerializer

    @permission_classes(IsAuthenticated)
    def get(self, request):
        try:
            user = User.objects.all().values('username', 'avatar', 'email').get(username=request.user.username)
            return Response(UserSerializer(user).data, status=200)
        except User.DoesNotExist:
            return Response(status=401)

    @csrf_exempt
    def post(self, request):
        try:
            serialized = UserSerializer(data=request.data)
            if serialized.is_valid():
                serialized.save()
            return authenticate_wrapper(username=request.data['username'], password=request.data['password'])
        except KeyError:
            return Response({'error': 'Invalid JSON'},
                            status=400)


class UserView(APIView):
    permission_classes = (AllowAny, )

    model = User
    serializer_class = UserSerializer

    def get(self, request, id):
        try:
            user = User.objects.all().values('username', 'avatar', 'email').get(id=id)
            return Response(UserSerializer(user).data, status=200)
        except User.DoesNotExist:
            return Response(status=404)


class UploadedFileViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )

    queryset = UploadedFile.objects.all().order_by('-name')
    serializer_class = FileSerializer

    def post(self, request):
        return Response(status=200)
