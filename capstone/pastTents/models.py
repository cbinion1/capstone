from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User


class User(models.Model):
    username = models.CharField(max_length=100)
    password = model.CharField(max_length=150)

        def __str__(self):
        return self.make


class Campsites(models.Model):
    location = models.CharField(max_length=250)
    overview = models.CharField(max_length=100)
    details = models.CharField(max_length=1000)
    images = models.ImageField(upload_to='campsite_image', blank=True)
    rv_sites = models.BooleanField(default=False)
    fire_rings = models.BooleanField(default=False)
    pets_allowed = models.BooleanField(default=False)
    drinking_water = models.BooleanField(default=False)
    toilets = models.BooleanField(default-False)
    reviews = models.ForeignKey(Reviews)
    user = models.ForeignKey(User)

        def __str__(self):
            return self.make


class Reviews(models.Model):
    location = models.ForeignKey(Campsites)
    body = models.CharField(max_length=5000)
    rating - IntegerField()
    user = models.ForeignKey(User)

        def __str__(self):
            return self.comment
