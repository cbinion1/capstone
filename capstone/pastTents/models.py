from django.db import models
from django.conf import settings
# from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
# from django.dispatch import receiver
# from django.contrib.auth.models import User


class Campsites(models.Model):
    location = models.CharField(max_length=250)
    overview = models.CharField(max_length=100)
    details = models.CharField(max_length=1000)
    images = models.ImageField(upload_to='campsite_image', blank=True)
    rv_sites = models.BooleanField(default=False)
    fire_rings = models.BooleanField(default=False)
    pets_allowed = models.BooleanField(default=False)
    drinking_water = models.BooleanField(default=False)
    toilets = models.BooleanField(default=False)
    reviews = models.ForeignKey(
        'Reviews', on_delete=models.CASCADE, blank=True, null=True)
    owner = models.ForeignKey(
        'auth.User', related_name='campsites', on_delete=models.CASCADE, null=True)
    # user = models.ForeignKey('User', on_delete=models.CASCADE)

    def __str__(self):
        return self.location


class Reviews(models.Model):
    location = models.ForeignKey(
        'Campsites', on_delete=models.CASCADE, related_name='+', null=True)
    body = models.CharField(max_length=5000)
    rating = models.PositiveIntegerField(default=0)
    owner = models.ForeignKey(
        'auth.User', related_name='reviews', on_delete=models.CASCADE, null=True)
    # user = models.ForeignKey('User', on_delete=models.CASCADE)

    def __str__(self):
        return self.body
