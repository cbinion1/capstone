from django.contrib import admin
from .models import (Campsites, Reviews)
from django.contrib.auth import get_user_model
# from django.contrib.auth.admin import UserAdmin
# from .forms import CustomUserCreationForm, CustomUserChangeForm


# class CustomUserAdmin(UserAdmin):
#     add_form = CustomUserCreationForm
#     form = CustomUserChangeForm
#     model = CustomUser
#     list_display = ['email', 'username', ]


# Register your models here.

# admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Campsites)
admin.site.register(Reviews)
