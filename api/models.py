from django.db import models


class Movie(models.Model):
    title = models.CharField(max_length=100)
    thumbnail = models.ImageField(upload_to="files/thumbnails")
    year = models.SmallIntegerField()

    def __str__(self):
        return self.title
