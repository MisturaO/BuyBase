from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.admin import GenericTabularInline
from store.admin import ProductAdmin
from store.models import Product
from tags.models import TaggedItem
from .models import User


class PermissionFilter(admin.SimpleListFilter):
    title = 'permission'
    parameter_name = 'permission'

    def lookups(self, request, model_admin):
        return [
            ('cancel_order', 'Cancel order'),
            ('view_history', 'View history'),
        ]

    def queryset(self, request, queryset):
        if self.value() is None:
            return User.objects.all()
        return User.objects.filter(user_permissions__codename=self.value())
    

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("first_name", "last_name", "username", "email", "password1", "password2"),
            },
        ),
    )

    list_filter = (PermissionFilter, 'is_staff', 'is_superuser', 'is_active', 'groups')


class TagInline(GenericTabularInline):
    autocomplete_fields = ['tag']
    model = TaggedItem


class CustomProductAdmin(ProductAdmin):
    inlines = [TagInline]


admin.site.unregister(Product)
admin.site.register(Product, CustomProductAdmin)
