# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-17 11:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=100)),
                ('file', models.FileField(upload_to='documents')),
                ('type', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
    ]
