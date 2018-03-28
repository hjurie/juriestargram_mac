from rest_framework import serializers
from . import models
from juriestargram.users import serializers as user_serializers
from juriestargram.images import serializers as image_serializers

class NotificationsSerializer(serializers.ModelSerializer):
    
    creator = user_serializers.ListUserSerializer()
    image = image_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = '__all__'
