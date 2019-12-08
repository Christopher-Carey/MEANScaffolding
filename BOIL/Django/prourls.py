from django.conf.urls import url, include

urlpatterns = [
    url(r'^', include('apps.your_app_name_here.urls')),
]