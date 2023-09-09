from django.db import models


class Movie(models.Model):
    title = models.CharField(max_length=100)
    poster = models.ImageField(upload_to="static/posters")
    year = models.SmallIntegerField()

    def __str__(self):
        return self.title
