from django.urls import include,path,re_path
from rest_framework.routers import DefaultRouter
from api.v1.job_api import views

app_name = 'job_api'


# router = DefaultRouter()
# router.register(r'jobs', JobViewSet)


urlpatterns = [

    # path('', include(router.urls)),

    path('jobs/', views.jobs, name='jobs'),
    path('job/create/', views.create_job, name='create_job'),
    path("job/view/<uuid:pk>/", views.job, name="job"),
    path('job/edit/<uuid:pk>/', views.edit_job, name='edit_job'),
    path("job/delete/<uuid:pk>/", views.delete_job, name="delete_job")

]