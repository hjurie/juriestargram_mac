from django.contrib import admin
from . import models


@admin.register(models.Notification)
class NotificationAdmin(admin.ModelAdmin):
    
    list_display = (
        'creator',
        'to',
        'notification_type',
        'created_at',
        'updated_at',
        'natural_time'
    )
