from django.db import models


class Permission(models.Model):
    name = models.CharField(max_length=128)
    code = models.CharField(max_length=128)
    app = models.CharField(max_length=128)

    class Admin:
        list_display = ('id', 'name', 'code', 'app')

    def __str__(self):
        return self.name + ' - ' + self.app
        