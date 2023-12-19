from model_bakery import baker
from rest_framework import status
from store.models import Product, Collection
import pytest


@pytest.fixture
def create_product(api_client):
    def do_create_product(product):
        return api_client.post('/store/products/', product)
    return do_create_product


@pytest.mark.django_db
class TestCreateProduct:
    def test_if_user_is_anonymous_return_401(self, create_product):
        response = create_product({'title': 'a'})
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_if_user_is_not_admin_returns_403(self, create_user, create_product):
        create_user(is_staff=False)
        response = create_product({'title': 'a'})
        assert response.status_code == status.HTTP_403_FORBIDDEN

    def test_if_data_is_invalid_returns_400(self, create_user, create_product):
        create_user(is_staff=True)
        response = create_product({'title': ''})
        assert response.status_code == status.HTTP_400_BAD_REQUEST

    def test_if_valid_data_returns_201(self, create_user, create_product):
        collection = baker.make(Collection)
        create_user(is_staff=True)
        response = create_product({
            'title': 'a',
            'description': 'a',
            'slug': 'a',
            'inventory': 1,
            'unit_price': 1,
            'collection': collection.id
        })
        assert response.status_code == status.HTTP_201_CREATED

@pytest.mark.django_db
class TestRetrieveProduct:
    def test_if_product_exists_returns_200(self, api_client):
        product = baker.make(Product)
        response = api_client.get(f'/store/products/{product.id}/')
        assert response.status_code == status.HTTP_200_OK
        assert response.data['id'] == product.id


@pytest.mark.django_db
class TestAllProduct:
    def test_all_products_returns_200(self, api_client):
        response = api_client.get('/store/products/')
        assert response.status_code == status.HTTP_200_OK
        assert isinstance(response.data['results'], list)
