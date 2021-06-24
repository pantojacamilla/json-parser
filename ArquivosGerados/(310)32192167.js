    package com.domain.app;&#xD;&#xA;    import android.app.Activity;&#xD;&#xA;    import android.content.Intent;&#xD;&#xA;    import android.net.Uri;&#xD;&#xA;    import android.os.Bundle;&#xD;&#xA;    import android.view.View;&#xD;&#xA;    public class LinkButtons extends Activity {&#xD;&#xA;        @Override&#xD;&#xA;        public void onCreate(Bundle savedInstanceState) {&#xD;&#xA;            super.onCreate(savedInstanceState);&#xD;&#xA;            setContentView(R.layout.activity_main);&#xD;&#xA;        }&#xD;&#xA;        public void goToBlue (View view) {&#xD;&#xA;            goToUrl ( "http://www.google.com");&#xD;&#xA;        }&#xD;&#xA;        public void goToRed (View view) {&#xD;&#xA;            goToUrl ( "http://www.facebook.com");&#xD;&#xA;        }&#xD;&#xA;        private void goToUrl (String url) {&#xD;&#xA;            Uri uriUrl = Uri.parse(url);&#xD;&#xA;            Intent launchBrowser = new Intent(Intent.ACTION_VIEW, uriUrl);&#xD;&#xA;            startActivity(launchBrowser);&#xD;&#xA;        }&#xD;&#xA;    }