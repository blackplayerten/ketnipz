from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    avatar = models.ImageField(blank=True, upload_to='img', verbose_name='Аватар')
    email = models.EmailField(blank=False, unique=True, verbose_name='Почта')

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'


class UploadedFile(models.Model):
    file = models.ImageField(upload_to='files', verbose_name='Файл')
    name = models.TextField(verbose_name='Имя файла')
    about = models.TextField(blank=True, verbose_name='Описание')
    uploaded_by = models.ForeignKey(to=User, on_delete=models.CASCADE)
    uploaded_time = models.DateTimeField()

    class Meta:
        verbose_name = 'Файл'
        verbose_name_plural = 'Файлы'
