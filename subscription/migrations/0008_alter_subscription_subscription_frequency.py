# Generated by Django 3.2.5 on 2021-07-15 02:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subscription', '0007_subscription_subscription_logo_path'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subscription',
            name='subscription_frequency',
            field=models.CharField(choices=[('month', 'monthly'), ('year', 'yearly')], default='month', max_length=10),
        ),
    ]
