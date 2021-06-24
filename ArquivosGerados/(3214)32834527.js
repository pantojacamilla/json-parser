 &#xD;&#xA;    import android.app.IntentService;&#xD;&#xA;    import android.content.Intent;&#xD;&#xA;    import android.os.Bundle;&#xD;&#xA;    import android.util.Log;&#xD;&#xA;    import android.widget.Toast;&#xD;&#xA;    import com.google.android.gms.gcm.GoogleCloudMessaging;&#xD;&#xA;    import java.lang.Runnable;&#xD;&#xA;    import java.util.logging.Handler;&#xD;&#xA;    import java.util.logging.LogRecord;&#xD;&#xA;    public class MyGCMMessageHandler extends IntentService {&#xD;&#xA;        String mes;&#xD;&#xA;        private Handler handler;&#xD;&#xA;        public MyGCMMessageHandler()&#xD;&#xA;        {&#xD;&#xA;            super("MyGCMMessageHandler");&#xD;&#xA;        }&#xD;&#xA;        public void onCreate()&#xD;&#xA;        {&#xD;&#xA;            super.onCreate();&#xD;&#xA;            this.handler = new Handler() {&#xD;&#xA;                @Override&#xD;&#xA;                public void close() {&#xD;&#xA;                }&#xD;&#xA;                @Override&#xD;&#xA;                public void flush() {&#xD;&#xA;                }&#xD;&#xA;                @Override&#xD;&#xA;                public void publish(LogRecord record) {&#xD;&#xA;                }&#xD;&#xA;            };&#xD;&#xA;        }&#xD;&#xA;        protected void onHandleIntent(Intent intent)&#xD;&#xA;        {&#xD;&#xA;            Bundle extras = intent.getExtras();&#xD;&#xA;            GoogleCloudMessaging gcm = GoogleCloudMessaging.getInstance(this);&#xD;&#xA;            String messageType = gcm.getMessageType(intent);&#xD;&#xA;            this.mes = extras.getString("title");&#xD;&#xA;            this.showToast();&#xD;&#xA;            Log.i("GCM", "Received: (" + messageType + ") " + mes);&#xD;&#xA;            MyGCMReceiver.completeWakefulIntent(intent);&#xD;&#xA;        }&#xD;&#xA;        public void showToast()&#xD;&#xA;        {&#xD;&#xA;            this.handler.post(new Runnable()&#xD;&#xA;            {&#xD;&#xA;                @Override&#xD;&#xA;                public void run() {&#xD;&#xA;                    Toast.makeText(MyGCMMessageHandler.this.getApplicationContext(), MyGCMMessageHandler.this.mes, Toast.LENGTH_LONG).show();&#xD;&#xA;                }&#xD;&#xA;            });&#xD;&#xA;        }&#xD;&#xA;    }