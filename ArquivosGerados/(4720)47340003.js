        <?xml version="1.0" encoding="utf-8"?>&#xD;&#xA;    <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"&#xD;&#xA;    xmlns:tools="http://schemas.android.com/tools"&#xD;&#xA;    android:layout_width="match_parent"&#xD;&#xA;    android:layout_height="match_parent"&#xD;&#xA;    android:orientation="vertical">&#xD;&#xA;        <LinearLayout&#xD;&#xA;            android:layout_width="match_parent"&#xD;&#xA;            android:layout_height="match_parent"&#xD;&#xA;            android:orientation="vertical">&#xD;&#xA;            <LinearLayout&#xD;&#xA;                android:layout_width="match_parent"&#xD;&#xA;                android:layout_height="wrap_content"&#xD;&#xA;                android:orientation="horizontal" >&#xD;&#xA;                <Spinner&#xD;&#xA;                    android:id="@+id/spinner1"&#xD;&#xA;                    android:layout_width="match_parent"&#xD;&#xA;                    android:layout_height="wrap_content"&#xD;&#xA;                    android:background="@android:drawable/btn_dropdown"&#xD;&#xA;                    android:spinnerMode="dropdown" />&#xD;&#xA;            </LinearLayout>&#xD;&#xA;            <LinearLayout&#xD;&#xA;                 android:layout_width="match_parent"&#xD;&#xA;                 android:layout_height="wrap_content"&#xD;&#xA;                 android:orientation="horizontal" >&#xD;&#xA;                 <Button&#xD;&#xA;                    android:id="@+id/full_screen"&#xD;&#xA;                    android:layout_width="match_parent"&#xD;&#xA;                    android:layout_height="wrap_content"&#xD;&#xA;                    android:text="Full Screen"&#xD;&#xA;                    style="?android:attr/borderlessButtonStyle"/>&#xD;&#xA;            </LinearLayout>&#xD;&#xA;            <LinearLayout&#xD;&#xA;                android:id="@+id/full_view"&#xD;&#xA;                android:layout_width="match_parent"&#xD;&#xA;                android:layout_height="wrap_content"&#xD;&#xA;                android:orientation="horizontal" >&#xD;&#xA;            </LinearLayout>&#xD;&#xA;        </LinearLayout>&#xD;&#xA;    </RelativeLayout>