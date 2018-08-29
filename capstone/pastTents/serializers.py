from rest_framework import serializers
from .models import Campsites, Reviews
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    campsites = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Campsites.objects.all())
    reviews = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Reviews.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'password')


class CampsitesSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Campsites
        fields = ('id', 'location', 'overview', 'details', 'images', 'rv_sites',
                  'fire_rings', 'pets_allowed', 'drinking_water', 'toilets', 'reviews', 'owner')


class ReviewsSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Reviews
        fields = ('id', 'location', 'body', 'rating', 'owner')
