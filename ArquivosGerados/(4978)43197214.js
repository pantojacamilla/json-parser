        @Override&#xD;&#xA;        public void onCreate(Bundle savedInstanceState)&#xD;&#xA;        {&#xD;&#xA;            super.onCreate(savedInstanceState);&#xD;&#xA;        }&#xD;&#xA;        @Override&#xD;&#xA;        public View onCreateView(LayoutInflater inflater, ViewGroup container,&#xD;&#xA;                                 Bundle savedInstanceState){&#xD;&#xA;            myFragmentView = inflater.inflate(R.layout.fragment_search, container, false);&#xD;&#xA;            ed = (SearchView) getActivity().findViewById(R.id.textSearch);&#xD;&#xA;            sc = (ImageButton) getActivity().findViewById(R.id.scanCamera);&#xD;&#xA;            hom = (ImageButton) getActivity().findViewById(R.id.btnhome);&#xD;&#xA;            lv = (ListView) myFragmentView.findViewById(R.id.resultList);&#xD;&#xA;            if(getArguments() !=null) {&#xD;&#xA;                word = this.getArguments().getString("word");&#xD;&#xA;            }&#xD;&#xA;            new GetResult().execute();&#xD;&#xA;            lv.setOnItemClickListener(new AdapterView.OnItemClickListener() {&#xD;&#xA;                @Override&#xD;&#xA;                public void onItemClick(AdapterView<?> parent, View view, int position, long id) {&#xD;&#xA;                    &#xD;&#xA;                    Intent intent = new Intent(getActivity(), MainActivity.class);&#xD;&#xA;                    intent.putExtra("word", noreg);&#xD;&#xA;                    startActivity(intent);&#xD;&#xA;                }&#xD;&#xA;            });&#xD;&#xA;            return myFragmentView;&#xD;&#xA;        }&#xD;&#xA;        private class GetResult extends AsyncTask<Void, Void, Void>{&#xD;&#xA;            @Override&#xD;&#xA;            protected void onPreExecute() {&#xD;&#xA;                super.onPreExecute();&#xD;&#xA;                pDialog = new ProgressDialog(getActivity());&#xD;&#xA;                pDialog.setMessage("Please wait...");&#xD;&#xA;                pDialog.setCancelable(false);&#xD;&#xA;                pDialog.show();&#xD;&#xA;            }&#xD;&#xA;            @Override&#xD;&#xA;            protected Void doInBackground(Void... arg0){&#xD;&#xA;                RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());&#xD;&#xA;                StringRequest stringRequest = new StringRequest(Request.Method.POST, search_url, new Response.Listener<String>() {&#xD;&#xA;                    @Override&#xD;&#xA;                    public void onResponse(String response) {&#xD;&#xA;                        try {&#xD;&#xA;                            JSONArray jsonArray = new JSONArray(response);&#xD;&#xA;                                final int result = jsonArray.length();&#xD;&#xA;                                resultlist = new ArrayList<>();&#xD;&#xA;                                for (int i = 0; i < result; i++){&#xD;&#xA;                                    JSONObject jsonObject = jsonArray.getJSONObject(i);&#xD;&#xA;                                    String noreg = jsonObject.getString("noreg");&#xD;&#xA;                                    String nama = jsonObject.getString("nama");&#xD;&#xA;                                    String imo = jsonObject.getString("imo");&#xD;&#xA;                                    HashMap<String, String> datastat = new HashMap<>();&#xD;&#xA;                                    datastat.put("noreg", noreg);&#xD;&#xA;                                    datastat.put("nama", nama);&#xD;&#xA;                                    datastat.put("imo", imo);&#xD;&#xA;                                    resultlist.add(datastat);&#xD;&#xA;                                    ListAdapter adapter = new SimpleAdapter(&#xD;&#xA;                                            getActivity(), resultlist,&#xD;&#xA;                                            R.layout.list_item, new String[]{"nama", "noreg",&#xD;&#xA;                                            "imo"}, new int[]{R.id.namakapal, R.id.noreg, R.id.imo});&#xD;&#xA;                                    lv.setAdapter(adapter);&#xD;&#xA;                                }&#xD;&#xA;                        } catch (JSONException e) {&#xD;&#xA;                            e.printStackTrace();&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                }, new Response.ErrorListener() {&#xD;&#xA;                    @Override&#xD;&#xA;                    public void onErrorResponse(VolleyError error) {&#xD;&#xA;                    }&#xD;&#xA;                })&#xD;&#xA;                {&#xD;&#xA;                    @Override&#xD;&#xA;                    protected Map<String, String> getParams() throws AuthFailureError {&#xD;&#xA;                        Map<String, String> params = new HashMap<String, String>();&#xD;&#xA;                        params.put("noregister", word);&#xD;&#xA;                        return params;&#xD;&#xA;                    }&#xD;&#xA;                };&#xD;&#xA;                queue.add(stringRequest);&#xD;&#xA;                return null;&#xD;&#xA;            }&#xD;&#xA;            @Override&#xD;&#xA;            protected void onPostExecute(Void result) {&#xD;&#xA;                super.onPostExecute(result);&#xD;&#xA;                if (pDialog.isShowing())&#xD;&#xA;                    pDialog.dismiss();&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    }