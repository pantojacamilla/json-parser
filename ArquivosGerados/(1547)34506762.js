      protected void onCreate(Bundle savedInstanceState) {&#xD;&#xA;          super.onCreate(savedInstanceState);&#xD;&#xA;          setContentView(R.layout.before_login_map_activity);&#xD;&#xA;          progressView = (View) findViewById(R.id.progress_bar);&#xD;&#xA;          if (initMap()) {&#xD;&#xA;            gpsTracker = new GPSTracker(this);&#xD;&#xA;            if (gpsTracker.canGetLoaction()) {&#xD;&#xA;              originlon = gpsTracker.getLongitide();&#xD;&#xA;              originlat = gpsTracker.getLattitude();&#xD;&#xA;              mMap.setMyLocationEnabled(true);&#xD;&#xA;              mMap.setMapType(GoogleMap.MAP_TYPE_NORMAL);&#xD;&#xA;              goToLocatoin(originlat, originlon);&#xD;&#xA;            }&#xD;&#xA;            getJsonLatLon();&#xD;&#xA;          } else {&#xD;&#xA;            Toast.makeText(BeforeLoginMapActivity.this, "Map Not Available!", Toast.LENGTH_SHORT).show();&#xD;&#xA;          }