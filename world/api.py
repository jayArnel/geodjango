from tastypie.resources import ModelResource
from models import WorldBorder


class WorldBorderResource(ModelResource):
    class Meta:
        queryset = WorldBorder.objects.all()
        resource_name = 'worldborder'

    def dehydrate_geom(self, bundle):
        return bundle.obj.geom.json
