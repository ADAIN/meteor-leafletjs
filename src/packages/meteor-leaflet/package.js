Package.describe({
  name: 'adain:meteor-leaflet',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'http://leafletjs.com/',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ADAIN/meteor-leafletjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.addFiles('lib/client/Leaflet.js', 'client');

  // core
  api.addFiles('lib/client/core/Util.js', 'client');
  api.addFiles('lib/client/core/Class.js', 'client');
  api.addFiles('lib/client/core/Browser.js', 'client');
  api.addFiles('lib/client/core/Events.js', 'client');
  api.addFiles('lib/client/core/Handler.js', 'client');

  // geometry
  api.addFiles('lib/client/geometry/Bounds.js', 'client');
  api.addFiles('lib/client/geometry/LineUtil.js', 'client');
  api.addFiles('lib/client/geometry/Point.js', 'client');
  api.addFiles('lib/client/geometry/PolyUtil.js', 'client');
  api.addFiles('lib/client/geometry/Transformation.js', 'client');

  // geo
  api.addFiles('lib/client/geo/LatLng.js', 'client');
  api.addFiles('lib/client/geo/LatLngBounds.js', 'client');
  api.addFiles('lib/client/geo/projection/Projection.LonLat.js', 'client');
  api.addFiles('lib/client/geo/projection/Projection.Mercator.js', 'client');
  api.addFiles('lib/client/geo/projection/Projection.SphericalMercator.js', 'client');
  api.addFiles('lib/client/geo/crs/CRS.js', 'client');
  api.addFiles('lib/client/geo/crs/CRS.Simple.js', 'client');
  api.addFiles('lib/client/geo/crs/CRS.Earth.js', 'client');
  api.addFiles('lib/client/geo/crs/CRS.EPSG3395.js', 'client');
  api.addFiles('lib/client/geo/crs/CRS.EPSG3857.js', 'client');
  api.addFiles('lib/client/geo/crs/CRS.EPSG4326.js', 'client');

  // dom
  api.addFiles('lib/client/dom/DomUtil.js', 'client');
  api.addFiles('lib/client/dom/Draggable.js', 'client');
  api.addFiles('lib/client/dom/DomEvent.js', 'client');
  api.addFiles('lib/client/dom/DomEvent.Pointer.js', 'client');
  api.addFiles('lib/client/dom/DomEvent.DoubleTap.js', 'client');
  api.addFiles('lib/client/dom/PosAnimation.js', 'client');

  // map
  api.addFiles('lib/client/map/Map.js', 'client');
  api.addFiles('lib/client/map/anim/Map.FlyTo.js', 'client');
  api.addFiles('lib/client/map/anim/Map.PanAnimation.js', 'client');
  api.addFiles('lib/client/map/anim/Map.ZoomAnimation.js', 'client');
  api.addFiles('lib/client/map/ext/Map.Geolocation.js', 'client');
  api.addFiles('lib/client/map/handler/Map.BoxZoom.js', 'client');
  api.addFiles('lib/client/map/handler/Map.DoubleClickZoom.js', 'client');
  api.addFiles('lib/client/map/handler/Map.Drag.js', 'client');
  api.addFiles('lib/client/map/handler/Map.Keyboard.js', 'client');
  api.addFiles('lib/client/map/handler/Map.ScrollWheelZoom.js', 'client');
  api.addFiles('lib/client/map/handler/Map.Tap.js', 'client');
  api.addFiles('lib/client/map/handler/Map.TouchZoom.js', 'client');

  // control
  api.addFiles('lib/client/control/Control.js', 'client');
  api.addFiles('lib/client/control/Control.Attribution.js', 'client');
  api.addFiles('lib/client/control/Control.Layers.js', 'client');
  api.addFiles('lib/client/control/Control.Scale.js', 'client');
  api.addFiles('lib/client/control/Control.Zoom.js', 'client');

  // layer
  api.addFiles('lib/client/layer/Layer.js', 'client');
  api.addFiles('lib/client/layer/Layer.Popup.js', 'client');
  api.addFiles('lib/client/layer/LayerGroup.js', 'client');
  api.addFiles('lib/client/layer/Popup.js', 'client');
  api.addFiles('lib/client/layer/ImageOverlay.js', 'client');
  api.addFiles('lib/client/layer/FeatureGroup.js', 'client');
  api.addFiles('lib/client/layer/marker/Icon.js', 'client');
  api.addFiles('lib/client/layer/marker/Icon.Default.js', 'client');
  api.addFiles('lib/client/layer/marker/Marker.js', 'client');
  api.addFiles('lib/client/layer/marker/Marker.Drag.js', 'client');
  api.addFiles('lib/client/layer/marker/Marker.Popup.js', 'client');
  api.addFiles('lib/client/layer/marker/DivIcon.js', 'client');
  api.addFiles('lib/client/layer/tile/GridLayer.js', 'client');
  api.addFiles('lib/client/layer/tile/TileLayer.js', 'client');
  api.addFiles('lib/client/layer/tile/TileLayer.WMS.js', 'client');
  api.addFiles('lib/client/layer/vector/Renderer.js', 'client');
  api.addFiles('lib/client/layer/vector/Path.js', 'client');
  api.addFiles('lib/client/layer/vector/Polyline.js', 'client');
  api.addFiles('lib/client/layer/vector/CircleMarker.js', 'client');
  api.addFiles('lib/client/layer/vector/Circle.js', 'client');
  api.addFiles('lib/client/layer/vector/Polygon.js', 'client');
  api.addFiles('lib/client/layer/vector/Rectangle.js', 'client');
  api.addFiles('lib/client/layer/vector/Canvas.js', 'client');
  api.addFiles('lib/client/layer/vector/SVG.js', 'client');
  api.addFiles('lib/client/layer/vector/SVG.VML.js', 'client');
  api.addFiles('lib/client/layer/GeoJSON.js', 'client');

  // images
  api.addAssets('lib/client/images/layers.svg', 'client');
  api.addAssets('lib/client/images/logo.svg', 'client');
  api.addAssets('lib/client/images/marker.svg', 'client');
});
