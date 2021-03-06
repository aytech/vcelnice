# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-02-19 14:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('caption', models.CharField(max_length=100, verbose_name='Caption')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Description')),
                ('file', models.FileField(max_length=150, upload_to='youtube', verbose_name='File')),
                ('thumb', models.ImageField(blank=True, max_length=150, null=True, upload_to='video', verbose_name='Thumbnail')),
                ('category', models.CharField(blank=True, choices=[('1', 'Film & Animation'), ('2', 'Autos & Vehicles'), ('10', 'Music'), ('15', 'Pets & Animals'), ('17', 'Sports'), ('18', 'Short Movies'), ('19', 'Travel & Events'), ('20', 'Gaming'), ('21', 'Videoblogging'), ('22', 'People & Blogs'), ('23', 'Comedy'), ('24', 'Entertainment'), ('25', 'News & Politics'), ('26', 'Howto & Style'), ('27', 'Education'), ('28', 'Science & Technology'), ('30', 'Movies'), ('31', 'Anime/Animation'), ('32', 'Action/Adventure'), ('33', 'Classics'), ('34', 'Comedy'), ('35', 'Documentary'), ('36', 'Drama'), ('37', 'Family'), ('38', 'Foreign'), ('39', 'Horror'), ('40', 'Sci-Fi/Fantasy'), ('41', 'Thriller'), ('42', 'Shorts'), ('43', 'Shows'), ('44', 'Trailers')], max_length=100, null=True, verbose_name='Category')),
                ('tags', models.CharField(blank=True, help_text='Add tags to the video, separated by commas', max_length=100, null=True, verbose_name='Tags')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('youtube_id', models.CharField(blank=True, max_length=150, null=True)),
                ('youtube_status', models.IntegerField(blank=True, default=1, null=True)),
            ],
        ),
    ]
