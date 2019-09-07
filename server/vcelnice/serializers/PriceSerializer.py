from rest_framework import serializers
from prices.models import Price


class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = ('title', 'price', 'weight', 'image')
