from django.conf.urls import include
from django.urls import path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'files', views.UploadedFileViewSet)

urlpatterns = [
    path(r'api/', include(router.urls)),
    path(r'api/user/<id>', views.UserView.as_view(), name='user_by_id'),
    path(r'api/user', views.UserFromSession.as_view(), name='user_from_session'),
    path(r'api/session', views.SessionView.as_view(), name='session'),
    path('api/login', views.login),
    path('api/logout', views.logout),
]
