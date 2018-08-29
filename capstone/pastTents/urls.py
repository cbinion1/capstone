from django.urls import path
from . import views
from django.conf.urls import url, include

from rest_framework.authtoken import views as rest_framework_views

urlpatterns = [
    path('api/campsites/', views.CampsitesList.as_view(), name='campsites-list'),
    path('api/campsites/<int:pk>',
         views.CampsitesDetail.as_view(), name='campsites-detail'),
    path('api/reviews/', views.ReviewsList.as_view(), name='reviews-list'),
    path('api/reviews/<int:pk>',
         views.ReviewsDetail.as_view(), name='reviews-detail'),

    # url(r'^users/$', views.UserList.as_view()),
    # url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    # url('api/api-auth/', include( 'rest_framework.urls', namespace='rest_framework')),
    # url(r'^api-token-auth/', views.obtain_auth_token),
    # url(r'^get_auth_token/$', rest_framework_views.obtain_auth_token, name='get_auth_token'),

    # url(r'^users/$', views.UserList.as_view()),
    # url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    # # url(r'^api-auth/', include('rest_framework.urls')),
    # # url(r'^api-auth/', include( 'rest_framework.urls', namespace='rest_framework')),
    # url('api/api-auth/', include( 'rest_framework.urls', namespace='rest_framework')),

]
