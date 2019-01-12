from django.conf.urls import include
from django.urls import path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'files', views.UploadedFileViewSet)

urlpatterns = [
    path(r'api/', include(router.urls)),
    path(r'auth/user/<id>', views.UserView.as_view(), name='user_by_id'),
    path(r'auth/user', views.UserFromSession.as_view(), name='user_from_session'),
    path(r'auth/session', views.SessionView.as_view(), name='session'),
    path('auth/login', views.login),
    path('auth/logout', views.logout),
]
