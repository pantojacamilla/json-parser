        //send current lat/long to server&#xD;&#xA;        &#xD;&#xA;            mSocket.emit("latitude", myLatitude);&#xD;&#xA;            mSocket.emit("longitude", myLongitude);&#xD;&#xA;    &#xD;&#xA;    //this is where a android user is receiving a msg&#xD;&#xA;    public void run() {&#xD;&#xA;                        JSONObject data = (JSONObject) args[0];&#xD;&#xA;                        String username;&#xD;&#xA;                        String message;&#xD;&#xA;                        String latitude;&#xD;&#xA;                        String longitude;&#xD;&#xA;                        Location loc1 = new Location("");&#xD;&#xA;                        try {&#xD;&#xA;                            username = data.getString("username");&#xD;&#xA;                            message = data.getString("message");&#xD;&#xA;                            latitude = data.getString("latitude");&#xD;&#xA;                            longitude = data.getString("longitude");&#xD;&#xA;                            Log.i(TAG,"" + latitude + longitude );&#xD;&#xA;                        } catch (JSONException e) {&#xD;&#xA;                            return;&#xD;&#xA;                        }