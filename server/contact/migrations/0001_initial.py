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
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('visitor', models.EmailField(max_length=254, verbose_name='email')),
                ('body', models.TextField(verbose_name='body')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('deleted', models.BooleanField(default=False)),
            ],
        ),
    ]
