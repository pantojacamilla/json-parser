    public class Prices extends AppCompatActivity {&#xD;&#xA;        TextView item_1 , item_2 ,a3 ,a4 ,a5 ,a6;&#xD;&#xA;        String url = "https://000000/app/almaraa/show.php";&#xD;&#xA;        RequestQueue requestQueue;&#xD;&#xA;        @Override&#xD;&#xA;        protected void onCreate(Bundle savedInstanceState) {&#xD;&#xA;            super.onCreate(savedInstanceState);&#xD;&#xA;            setContentView(R.layout.activity_prices);&#xD;&#xA;            TextView item_1 = (TextView) findViewById(R.id.item_1);&#xD;&#xA;            TextView item_2 = (TextView) findViewById(R.id.item_2);&#xD;&#xA;            requestQueue = Volley.newRequestQueue(this);&#xD;&#xA;            JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, url,null,&#xD;&#xA;                    new Response.Listener<JSONObject>() {&#xD;&#xA;                        @Override&#xD;&#xA;                        public void onResponse(JSONObject response) {&#xD;&#xA;                            final Globalv globalv = (Globalv) getApplicationContext();&#xD;&#xA;                            try {&#xD;&#xA;                                JSONArray jsonArray = response.getJSONArray("allmess");&#xD;&#xA;                                for (int i = 0; i < response.length(); i++) {&#xD;&#xA;                                    JSONObject respons = jsonArray.getJSONObject(i);&#xD;&#xA;                                    String id = respons.getString("id");&#xD;&#xA;                                    String item_1 = respons.getString("item_1");&#xD;&#xA;                                    String item_2 = respons.getString("item_2");&#xD;&#xA;                                }&#xD;&#xA;                                JSONObject respons2 = jsonArray.getJSONObject(0);&#xD;&#xA;                                String id = respons2.getString("id");&#xD;&#xA;                                globalv.setTotal_threads(Integer.parseInt(String.valueOf(id)));&#xD;&#xA;                            } catch (JSONException e) {&#xD;&#xA;                                e.printStackTrace();&#xD;&#xA;                            }&#xD;&#xA;                        }&#xD;&#xA;                    }, new Response.ErrorListener() {&#xD;&#xA;                @Override&#xD;&#xA;                public void onErrorResponse(VolleyError error) {&#xD;&#xA;                    Log.e("VOLLEY", "ERROR");&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;            );&#xD;&#xA;            requestQueue.add(jsonObjectRequest);&#xD;&#xA;        }&#xD;&#xA;    }