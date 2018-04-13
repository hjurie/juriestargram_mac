from rest_framework import serializers
from . import models
from juriestargram.users import serializers as user_serializers
from juriestargram.images import serializers as image_serializers

class NotificationSerializer(serializers.ModelSerializer):

    creator = user_serializers.ListUserSerializer()
    image = image_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = (
            'id',
            'creator',
            'image',
            'notification_type',
            'comment',
            'natural_time',
            'created_at',
            'updated_at',
            'to'
        )
