# Generated by Django 2.0 on 2018-04-16 14:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photo', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='height',
            field=models.CharField(blank=True, max_length=3, null=True),
        ),
        migrations.AddField(
            model_name='photo',
            name='width',
            field=models.CharField(blank=True, max_length=3, null=True),
        ),
    ]
