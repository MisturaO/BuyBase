from model_bakery import baker
from rest_framework import status
from store.models import Collection
import pytest

@pytest.fixture
def create_collection(api_client):
    def inner_function(collection):
        return api_client.post('/store/collections/', collection)
    return inner_function


@pytest.mark.django_db
class TestCreateCollection:
    def test_if_user_is_anonymous_returns_401(self, create_collection):
        # Arrange

        # Act
        response = create_collection({ 'title': 'a' })
        # Assert
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_if_user_is_not_admin_returns_403(self, create_collection, create_user):
        create_user()
        
        response = create_collection({ 'title': 'a' })
        
        assert response.status_code == status.HTTP_403_FORBIDDEN
        
    def test_if_data_is_invalid_returns_400(self, create_collection, create_user):
        create_user(is_staff=True)

        response = create_collection({ 'title': '' })

        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert response.data['title'] is not None

    def test_if_data_is_valid_returns_201(self, create_collection, create_user):
        create_user(is_staff=True)
        
        response = create_collection({ 'title': 'a' })

        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['id'] > 0

@pytest.mark.django_db
class TestRetrieveCollection:
    def test_if_collection_exists_returns_200(self, api_client):
        # Arrange
        collection = baker.make(Collection)
        # Act
        response = api_client.get(f'/store/collections/{collection.id}/')
        # Assert
        assert response.status_code == status.HTTP_200_OK
        assert response.data == {
            'id': collection.id,
            'title': collection.title,
            'products_count': 0
        }

@pytest.mark.django_db
class TestAllCollections:
    def test_all_collections_returns_200(self, api_client):
        response = api_client.get('/store/collections/')
        assert response.status_code == status.HTTP_200_OK
        assert isinstance(response.data, list)

