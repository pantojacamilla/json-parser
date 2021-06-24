    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />&#xD;&#xA;        <uses-permission android:name="android.permission.INTERNET" />&#xD;&#xA;        <uses-permission android:name="abdroid.permission.ACCESS_NETWORK_STATE" />&#xD;&#xA;        <uses-permission android:name="android.permission.WAKE_LOCK" />&#xD;&#xA;        <uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />&#xD;&#xA;        <application&#xD;&#xA;            android:allowBackup="true"&#xD;&#xA;            android:icon="@drawable/ic_launcher"&#xD;&#xA;            android:label="@string/app_name"&#xD;&#xA;            android:theme="@style/AppTheme" >&#xD;&#xA;            <activity&#xD;&#xA;                android:name=".MainActivity"&#xD;&#xA;                android:configChanges="keyboardHidden|orientation"&#xD;&#xA;                android:label="@string/app_name"&#xD;&#xA;                android:screenOrientation="portrait" >&#xD;&#xA;                <intent-filter>&#xD;&#xA;                    <action android:name="android.intent.action.MAIN" />&#xD;&#xA;                    <category android:name="android.intent.category.LAUNCHER" />&#xD;&#xA;                </intent-filter>&#xD;&#xA;            </activity>&#xD;&#xA;    <receiver&#xD;&#xA;                android:name="com.google.android.gms.gcm.GcmReceiver"&#xD;&#xA;                android:exported="true"&#xD;&#xA;                android:permission="com.google.android.c2dm.permission.SEND" >&#xD;&#xA;                <intent-filter>&#xD;&#xA;                    <action android:name="com.google.android.c2dm.intent.RECEIVE" />&#xD;&#xA;                    <category android:name="gcm.play.android.samples.com.gcmquickstart" />&#xD;&#xA;                </intent-filter>&#xD;&#xA;            </receiver>&#xD;&#xA;            <service android:name=".MyGcmListener" android:exported="false">&#xD;&#xA;                <intent-filter>&#xD;&#xA;                    <action android:name="com.google.android.gms.iid.InstanceID"/>&#xD;&#xA;                </intent-filter>&#xD;&#xA;            </service>&#xD;&#xA;        </application>&#xD;&#xA; 