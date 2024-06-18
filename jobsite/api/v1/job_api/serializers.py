from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from job.models import Job


class JobSerializer(ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'

class JobListSerializer(ModelSerializer):
    class Meta:
        model = Job
        exclude = ['is_deleted']