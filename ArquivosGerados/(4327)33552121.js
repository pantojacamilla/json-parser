    public class MyAsyncTask extends AsyncTask < Void, Void, String > {&#xD;&#xA;      @Override&#xD;&#xA;      protected String doInBackground(Void...params) {&#xD;&#xA;        loadXML();&#xD;&#xA;      }&#xD;&#xA;      @Override&#xD;&#xA;      protected void onPostExecute(String result) {&#xD;&#xA;        setValues();&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    public void loadXML() {&#xD;&#xA;      //loadsXML&#xD;&#xA;    }&#xD;&#xA;    public void setValues() {&#xD;&#xA;      //Sets values to textViews&#xD;&#xA;    }