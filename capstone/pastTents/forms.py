from django import forms
from .models import Campsites, Reviews
# from django.contrib.auth.forms import UserCreationForm, UserChangeForm


class CampsitesForm(forms.ModelForm):
    class Meta:
        model = Campsites
        fields = ('location', 'overview', 'details', 'images', 'rv_sites', 'fire_rings',
                  'pets_allowed', 'drinking_water', 'toilets', 'reviews')


class ReviewsForm(forms.ModelForm):
    class Meta:
        model = Reviews
        fields = ('location', 'body', 'rating')


# class CustomUserCreationForm(UserCreationForm):
#     class Meta(UserCreationForm.Meta):
#         model = CustomUser
#         fields = ('username', 'email')


# class CustomUserChangeForm(UserChangeForm):
#     class Meta:
#         model = CustomUser
#         fields = ('username', 'email')
