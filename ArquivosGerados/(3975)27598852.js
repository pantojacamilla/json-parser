    <uses-permission android:name="android.permission.WAKE_LOCK" />&#xD;&#xA;      <application>&#xD;&#xA;      <receiver android:name=".medicine.modal.AlarmReceiver" android:permission="android.permission.WAKE_LOCK"&#xD;&#xA;                android:enabled="true" android:exported="true" android:process=":remote">&#xD;&#xA;                <intent-filter>&#xD;&#xA;                    <action android:name="com.healthsaverz.nimap.healthmobile.healthsaverz.mainscreen.controller.NotificationActivity" />&#xD;&#xA;                    <action android:name="android.intent.action.BOOT_COMPLETED" />&#xD;&#xA;                </intent-filter>&#xD;&#xA;            </receiver>&#xD;&#xA;       </application>