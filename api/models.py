from django.db import models
from django.contrib.auth.models import AbstractUser


class Movie(models.Model):
    title = models.CharField(max_length=100)
    poster = models.ImageField(upload_to="posters/")
    year = models.SmallIntegerField()

    def __str__(self):
        return self.title


class User(AbstractUser):
    watchlist = models.ManyToManyField(Movie)
