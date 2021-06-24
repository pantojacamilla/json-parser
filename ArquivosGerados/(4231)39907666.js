    package com.example.stormy.greenfrogcafe;&#xD;&#xA;    import android.content.Context;&#xD;&#xA;    import android.content.Intent;&#xD;&#xA;    import android.content.SharedPreferences;&#xD;&#xA;    import android.net.Uri;&#xD;&#xA;    import android.support.annotation.NonNull;&#xD;&#xA;    import android.support.v7.app.AppCompatActivity;&#xD;&#xA;    import android.os.Bundle;&#xD;&#xA;    import android.text.TextUtils;&#xD;&#xA;    import android.view.View;&#xD;&#xA;    import android.view.View.OnClickListener;&#xD;&#xA;    import android.view.inputmethod.InputMethodManager;&#xD;&#xA;    import android.widget.Button;&#xD;&#xA;    import android.widget.CheckBox;&#xD;&#xA;    import android.widget.EditText;&#xD;&#xA;    import android.widget.TextView;&#xD;&#xA;    import android.widget.Toast;&#xD;&#xA;    import com.firebase.ui.auth.AuthUI;&#xD;&#xA;    import com.google.android.gms.appindexing.Action;&#xD;&#xA;    import com.google.android.gms.appindexing.AppIndex;&#xD;&#xA;    import com.google.android.gms.appindexing.Thing;&#xD;&#xA;    import com.google.android.gms.common.api.GoogleApiClient;&#xD;&#xA;    import com.google.android.gms.tasks.OnCompleteListener;&#xD;&#xA;    import com.google.android.gms.tasks.Task;&#xD;&#xA;    import com.google.api.client.googleapis.util.Utils;&#xD;&#xA;    import com.google.firebase.auth.AuthResult;&#xD;&#xA;    import com.firebase.ui.auth.AuthUI;&#xD;&#xA;    import com.google.firebase.auth.FirebaseAuth;&#xD;&#xA;    import static android.R.string.ok;&#xD;&#xA;    import static com.example.stormy.greenfrogcafe.R.id.password;&#xD;&#xA;    import static com.example.stormy.greenfrogcafe.R.id.saveLoginCheckBox;&#xD;&#xA;    public abstract class LoginPage extends AppCompatActivity implements OnClickListener {&#xD;&#xA;        private EditText etEmailUser;&#xD;&#xA;        private EditText etPassword;&#xD;&#xA;        private Button bLogin;&#xD;&#xA;        private TextView tvRegisterHere;&#xD;&#xA;        private CheckBox btRememberME;&#xD;&#xA;        private Button bForgotpassword;&#xD;&#xA;        private FirebaseAuth mAuth;&#xD;&#xA;        private  FirebaseAuth.AuthStateListener mAuthListener;&#xD;&#xA;        private static final int RC_SIGN_IN = 0;&#xD;&#xA;        /**&#xD;&#xA;         * ATTENTION: This was auto-generated to implement the App Indexing API.&#xD;&#xA;         * See https://g.co/AppIndexing/AndroidStudio for more information.&#xD;&#xA;         */&#xD;&#xA;        private GoogleApiClient client;&#xD;&#xA;        private SharedPreferences loginPreferences;&#xD;&#xA;        @Override&#xD;&#xA;        protected void onCreate(Bundle savedInstanceState) {&#xD;&#xA;            super.onCreate(savedInstanceState);&#xD;&#xA;            setContentView(R.layout.activity_login);&#xD;&#xA;            FirebaseAuth auth = FirebaseAuth.getInstance();&#xD;&#xA;            if (auth.getCurrentUser() != null) {&#xD;&#xA;                //user already logged in&#xD;&#xA;            } else {&#xD;&#xA;                startActivityForResult(AuthUI.getInstance()&#xD;&#xA;                        .createSignInIntentBuilder()&#xD;&#xA;                        .setProviders(&#xD;&#xA;                                AuthUI.FACEBOOK_PROVIDER)&#xD;&#xA;                        .build(), RC_SIGN_IN);&#xD;&#xA;                mAuth = FirebaseAuth.getInstance();&#xD;&#xA;                EditText etEmail = (EditText) findViewById(R.id.etEmailUser);&#xD;&#xA;                EditText etPassword = (EditText) findViewById(R.id.etPassword);&#xD;&#xA;                CheckBox saveLoginCheckBox;&#xD;&#xA;                final TextView registerLink = (TextView) findViewById(R.id.tvRegisterHere);&#xD;&#xA;                registerLink.setOnClickListener(new OnClickListener() {&#xD;&#xA;                    @Override&#xD;&#xA;                    public void onClick(View v) {&#xD;&#xA;                        Intent registerIntent = new Intent(LoginPage.this, register.class);&#xD;&#xA;                        LoginPage.this.startActivity(registerIntent);&#xD;&#xA;                    }&#xD;&#xA;                });&#xD;&#xA;                Button bLogin = (Button) findViewById(R.id.bLogin);&#xD;&#xA;                mAuthListener = new FirebaseAuth.AuthStateListener() {&#xD;&#xA;                    @Override&#xD;&#xA;                    public void onAuthStateChanged(@NonNull FirebaseAuth firebaseAuth) {&#xD;&#xA;                        if (firebaseAuth.getCurrentUser() != null) {&#xD;&#xA;                            startActivity(new Intent(LoginPage.this, HybridActivity.class));&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                };&#xD;&#xA;                bLogin.setOnClickListener(new OnClickListener() {&#xD;&#xA;                    @Override&#xD;&#xA;                    public void onClick(View v) {&#xD;&#xA;                        startSignIn();&#xD;&#xA;                    }&#xD;&#xA;                });&#xD;&#xA;                // ATTENTION: This was auto-generated to implement the App Indexing API.&#xD;&#xA;                // See https://g.co/AppIndexing/AndroidStudio for more information.&#xD;&#xA;                client = new GoogleApiClient.Builder(this).addApi(AppIndex.API).build();&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        public void startSignIn() {&#xD;&#xA;            String email = etEmailUser.getText().toString();&#xD;&#xA;            String password = etPassword.getText().toString();&#xD;&#xA;            if (TextUtils.isEmpty(email) || TextUtils.isEmpty(password)) {&#xD;&#xA;            } else {&#xD;&#xA;                mAuth.signInWithEmailAndPassword(email, password).addOnCompleteListener(new OnCompleteListener<AuthResult>() {&#xD;&#xA;                    @Override&#xD;&#xA;                    public void onComplete(@NonNull Task<AuthResult> task) {&#xD;&#xA;                        if (task.isSuccessful()) {&#xD;&#xA;                            Toast.makeText(LoginPage.this, "Sign in problem", Toast.LENGTH_LONG).show();&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                });&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        public Action getIndexApiAction() {&#xD;&#xA;            Thing object = new Thing.Builder()&#xD;&#xA;                    .setName("LoginPage Page") // TODO: Define a title for the content shown.&#xD;&#xA;                    // TODO: Make sure this auto-generated URL is correct.&#xD;&#xA;                    .setUrl(Uri.parse("http://[ENTER-YOUR-URL-HERE]"))&#xD;&#xA;                    .build();&#xD;&#xA;            return new Action.Builder(Action.TYPE_VIEW)&#xD;&#xA;                    .setObject(object)&#xD;&#xA;                    .setActionStatus(Action.STATUS_TYPE_COMPLETED)&#xD;&#xA;                    .build();&#xD;&#xA;        }&#xD;&#xA;        @Override&#xD;&#xA;        public void onStart() {&#xD;&#xA;            super.onStart();&#xD;&#xA;            mAuth.addAuthStateListener(mAuthListener);&#xD;&#xA;            // ATTENTION: This was auto-generated to implement the App Indexing API.&#xD;&#xA;            // See https://g.co/AppIndexing/AndroidStudio for more information.&#xD;&#xA;            client.connect();&#xD;&#xA;            AppIndex.AppIndexApi.start(client, getIndexApiAction());&#xD;&#xA;        }&#xD;&#xA;        @Override&#xD;&#xA;        public void onStop() {&#xD;&#xA;            super.onStop();&#xD;&#xA;            // ATTENTION: This was auto-generated to implement the App Indexing API.&#xD;&#xA;            // See https://g.co/AppIndexing/AndroidStudio for more information.&#xD;&#xA;            AppIndex.AppIndexApi.end(client, getIndexApiAction());&#xD;&#xA;            client.disconnect();&#xD;&#xA;        }&#xD;&#xA;    }