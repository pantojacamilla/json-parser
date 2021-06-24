    <?xml version="1.0" encoding="utf-8"?>&#xD;&#xA;    <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"&#xD;&#xA;        xmlns:foobar="http://schemas.android.com/apk/res-auto"&#xD;&#xA;        android:id="@+id/container"&#xD;&#xA;        android:layout_width="match_parent"&#xD;&#xA;        android:layout_height="50dp"&#xD;&#xA;        android:paddingBottom="3dp"&#xD;&#xA;        android:paddingTop="3dp">&#xD;&#xA;        <com.android.volley.toolbox.NetworkImageView&#xD;&#xA;            android:id="@+id/thumbnail"&#xD;&#xA;            android:layout_width="match_parent"&#xD;&#xA;            android:layout_height="50dp"&#xD;&#xA;            android:background="#ddd"&#xD;&#xA;            android:scaleType="centerCrop"&#xD;&#xA;            android:visibility="invisible" />&#xD;&#xA;        <RelativeLayout&#xD;&#xA;            android:layout_width="fill_parent"&#xD;&#xA;            android:layout_height="wrap_content"&#xD;&#xA;            android:orientation="horizontal">&#xD;&#xA;            <com.ctrlplusz.anytextview.AnyTextView&#xD;&#xA;                android:id="@+id/tv2"&#xD;&#xA;                android:layout_width="wrap_content"&#xD;&#xA;                android:layout_height="wrap_content"&#xD;&#xA;                android:layout_alignParentLeft="true"&#xD;&#xA;                android:layout_centerVertical="true"&#xD;&#xA;                android:layout_toLeftOf="@+id/input"&#xD;&#xA;                android:ellipsize="end"&#xD;&#xA;                android:maxLength="20"&#xD;&#xA;                android:maxLines="1"&#xD;&#xA;                android:paddingLeft="7dp"&#xD;&#xA;                android:singleLine="true"&#xD;&#xA;                android:text="cshbcadhbhjvbbvjfbvcsdhabcsdjbvjsdbvjsfdbvsfnvk"&#xD;&#xA;                android:textColor="@color/black"&#xD;&#xA;                android:textSize="20dp"&#xD;&#xA;                foobar:typeface="Roboto-Light.ttf" />&#xD;&#xA;            <!--android:text="cshbcadhbhjvbbvjfbvcsdhabcsdjbvjsdbvjsfdbvsfnvk"-->&#xD;&#xA;            <RelativeLayout&#xD;&#xA;                android:id="@+id/input"&#xD;&#xA;                android:layout_width="wrap_content"&#xD;&#xA;                android:layout_height="wrap_content"&#xD;&#xA;                android:layout_alignParentRight="true"&#xD;&#xA;                android:layout_centerVertical="true"&#xD;&#xA;                android:layout_gravity="center_vertical">&#xD;&#xA;                <com.ctrlplusz.anytextview.AnyTextView&#xD;&#xA;                    android:id="@+id/price"&#xD;&#xA;                    android:layout_width="wrap_content"&#xD;&#xA;                    android:layout_height="wrap_content"&#xD;&#xA;                    android:layout_centerVertical="true"&#xD;&#xA;                    android:layout_toLeftOf="@+id/toggle"&#xD;&#xA;                    android:gravity="end"&#xD;&#xA;                    android:paddingRight="4dp"&#xD;&#xA;                    android:text="3900"&#xD;&#xA;                    android:textColor="@color/gray"&#xD;&#xA;                    android:textSize="20dp"&#xD;&#xA;                    foobar:typeface="Roboto-Light.ttf" />&#xD;&#xA;                <RelativeLayout&#xD;&#xA;                    android:id="@+id/toggle"&#xD;&#xA;                    android:layout_width="wrap_content"&#xD;&#xA;                    android:layout_height="wrap_content"&#xD;&#xA;                    android:layout_centerVertical="true"&#xD;&#xA;                    android:layout_marginRight="5dp"&#xD;&#xA;                    android:gravity="end"&#xD;&#xA;                    android:orientation="horizontal">&#xD;&#xA;                    <RelativeLayout&#xD;&#xA;                        android:id="@+id/minus"&#xD;&#xA;                        android:layout_width="38dp"&#xD;&#xA;                        android:layout_height="35dp"&#xD;&#xA;                        android:layout_centerVertical="true"&#xD;&#xA;                        android:background="@drawable/minus_product_icon">&#xD;&#xA;                        <ImageView&#xD;&#xA;                            android:layout_width="20dp"&#xD;&#xA;                            android:layout_height="20dp"&#xD;&#xA;                            android:layout_centerHorizontal="true"&#xD;&#xA;                            android:layout_centerVertical="true"&#xD;&#xA;                            android:src="@drawable/ic_minus" />&#xD;&#xA;                    </RelativeLayout>&#xD;&#xA;                    <RelativeLayout&#xD;&#xA;                        android:id="@+id/add"&#xD;&#xA;                        android:layout_width="38dp"&#xD;&#xA;                        android:layout_height="35dp"&#xD;&#xA;                        android:layout_centerVertical="true"&#xD;&#xA;                        android:layout_toRightOf="@+id/num"&#xD;&#xA;                        android:background="@drawable/add_product_icon">&#xD;&#xA;                        <ImageView&#xD;&#xA;                            android:layout_width="20dp"&#xD;&#xA;                            android:layout_height="20dp"&#xD;&#xA;                            android:layout_centerHorizontal="true"&#xD;&#xA;                            android:layout_centerVertical="true"&#xD;&#xA;                            android:src="@drawable/ic_add_icon" />&#xD;&#xA;                    </RelativeLayout>&#xD;&#xA;                    <EditText&#xD;&#xA;                        android:id="@+id/num"&#xD;&#xA;                        android:layout_width="40dp"&#xD;&#xA;                        android:layout_height="35dp"&#xD;&#xA;                        android:layout_centerVertical="true"&#xD;&#xA;                        android:layout_toRightOf="@+id/minus"&#xD;&#xA;                        android:background="@drawable/product_custom_edit_text"&#xD;&#xA;                        android:digits="1234567890"&#xD;&#xA;                        android:focusable="true"&#xD;&#xA;                        android:focusableInTouchMode="true"&#xD;&#xA;                        android:gravity="center"&#xD;&#xA;                        android:imeOptions="actionDone"&#xD;&#xA;                        android:inputType="numberDecimal"&#xD;&#xA;                        android:padding="2dp"&#xD;&#xA;                        android:singleLine="true"&#xD;&#xA;                        android:text="0"&#xD;&#xA;                        android:textColor="#000"&#xD;&#xA;                        android:textCursorDrawable="@drawable/mycursor" />&#xD;&#xA;                </RelativeLayout>&#xD;&#xA;            </RelativeLayout>&#xD;&#xA;        </RelativeLayout>&#xD;&#xA;        <com.ctrlplusz.anytextview.AnyTextView&#xD;&#xA;            android:id="@+id/p"&#xD;&#xA;            android:layout_width="0dp"&#xD;&#xA;            android:layout_height="0dp"&#xD;&#xA;            android:layout_centerVertical="true"&#xD;&#xA;            android:layout_gravity="center_vertical"&#xD;&#xA;            android:layout_marginLeft="11dp"&#xD;&#xA;            android:textColor="@color/gray"&#xD;&#xA;            android:textSize="20dp"&#xD;&#xA;            foobar:typeface="Roboto-Light.ttf" />&#xD;&#xA;    </RelativeLayout>