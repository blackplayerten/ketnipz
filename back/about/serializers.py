from django.utils import timezone
from rest_framework import serializers
from .models import User, UploadedFile


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    avatar = serializers.FileField(allow_null=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'avatar', )
        write_only_fields = ('password', )  # ?!!

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = ('file', 'name', 'about', 'uploaded_by', 'uploaded_time', )
        read_only_fields = ('uploaded_by', 'uploaded_time', )

    def create(self, validated_data):
        validated_data['uploaded_by'] = self.context['request'].user
        validated_data['uploaded_time'] = timezone.now()
        file = super(FileSerializer, self).create(validated_data)
        file.save()
        return file
