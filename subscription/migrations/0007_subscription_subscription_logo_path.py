# Generated by Django 3.2.5 on 2021-07-14 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subscription', '0006_auto_20210714_1323'),
    ]

    operations = [
        migrations.AddField(
            model_name='subscription',
            name='subscription_logo_path',
            field=models.CharField(default='placeholder.svg', max_length=128),
        ),
    ]
