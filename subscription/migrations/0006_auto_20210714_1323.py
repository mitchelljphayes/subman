# Generated by Django 3.2.5 on 2021-07-14 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subscription', '0005_subscriptionoccurence'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.AddField(
            model_name='subscription',
            name='subscription_category',
            field=models.CharField(choices=[('health', 'health'), ('entertainment', 'entertainment'), ('utilities', 'utilities'), ('work', 'work'), ('insurance', 'insurance'), ('other', 'other')], default='entertainment', max_length=13),
        ),
    ]
