from django.contrib.auth.models import User
from rest_framework.test import APIClient
import pytest


@pytest.fixture
def api_client():
    return APIClient()


@pytest.fixture
def create_user(api_client):
    def inner_function(is_staff=False):
        api_client.force_authenticate(user=User(is_staff=is_staff))
    return inner_function