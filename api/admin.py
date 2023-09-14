from django.contrib import admin
from .models import User, Movie, WatchlistEntry


class MovieAdmin(admin.ModelAdmin):
    readonly_fields = ("id",)


admin.site.register(User)
admin.site.register(Movie, MovieAdmin)
admin.site.register(WatchlistEntry)
