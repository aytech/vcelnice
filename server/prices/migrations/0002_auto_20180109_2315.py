# Generated by Django 2.0 on 2018-01-09 22:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('prices', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reservation',
            old_name='quantity',
            new_name='amount',
        ),
        migrations.RenameField(
            model_name='reservation',
            old_name='sender',
            new_name='email',
        ),
        migrations.RenameField(
            model_name='reservation',
            old_name='note',
            new_name='message',
        ),
    ]