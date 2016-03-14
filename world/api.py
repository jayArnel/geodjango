from tastypie.resources import ModelResource
from models import WorldBorder
from tastypie import fields


class WorldBorderResource(ModelResource):
    geojson = fields.CharField(attribute='geojson', readonly=True)

    class Meta:
        queryset = WorldBorder.objects.all()
        resource_name = 'worldborder'

    def dehydrate_geom(self, bundle):
        return bundle.obj.geom.json
