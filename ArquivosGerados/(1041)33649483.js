    package id.co.kendaricall;&#xD;&#xA;    import android.app.ProgressDialog;&#xD;&#xA;    import android.content.Intent;&#xD;&#xA;    import android.os.Bundle;&#xD;&#xA;    import android.os.Handler;&#xD;&#xA;    import android.os.Message;&#xD;&#xA;    import android.util.Log;&#xD;&#xA;    import android.view.View;&#xD;&#xA;    import android.widget.AdapterView;&#xD;&#xA;    import android.widget.AdapterView.OnItemClickListener;&#xD;&#xA;    import android.widget.GridView;&#xD;&#xA;    import java.io.IOException;&#xD;&#xA;    public class KategoriActivity extends TemplateActivity {&#xD;&#xA;        private ProgressDialog progressDialog;&#xD;&#xA;        /* renamed from: id.co.kendaricall.KategoriActivity.1 */&#xD;&#xA;        class C00811 extends Handler {&#xD;&#xA;            C00811() {&#xD;&#xA;            }&#xD;&#xA;            public void handleMessage(Message msg) {&#xD;&#xA;                KategoriActivity.this.progressDialog.dismiss();&#xD;&#xA;                KategoriActivity.this.myData.openDataBase();&#xD;&#xA;                KategoriActivity.this.showKategoriList();&#xD;&#xA;                KategoriActivity.this.pilihLokasiDialog(KategoriActivity.this.findViewById(C0089R.id.button_location));&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        /* renamed from: id.co.kendaricall.KategoriActivity.2 */&#xD;&#xA;        class C00822 extends Thread {&#xD;&#xA;            private final /* synthetic */ Handler val$handler;&#xD;&#xA;            C00822(Handler handler) {&#xD;&#xA;                this.val$handler = handler;&#xD;&#xA;            }&#xD;&#xA;            public void run() {&#xD;&#xA;                try {&#xD;&#xA;                    KategoriActivity.this.myData.createDataBase();&#xD;&#xA;                } catch (IOException e) {&#xD;&#xA;                    e.printStackTrace();&#xD;&#xA;                }&#xD;&#xA;                this.val$handler.sendEmptyMessage(0);&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        /* renamed from: id.co.kendaricall.KategoriActivity.3 */&#xD;&#xA;        class C00833 implements OnItemClickListener {&#xD;&#xA;            private final /* synthetic */ AdapterKategori val$adapter;&#xD;&#xA;            C00833(AdapterKategori adapterKategori) {&#xD;&#xA;                this.val$adapter = adapterKategori;&#xD;&#xA;            }&#xD;&#xA;            public void onItemClick(AdapterView<?> adapterView, View v, int position, long id) {&#xD;&#xA;                KategoriActivity.this.showKontakActivity(this.val$adapter.getItemId(position));&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        protected void onCreate(Bundle savedInstanceState) {&#xD;&#xA;            super.onCreate(savedInstanceState);&#xD;&#xA;            setContentView(C0089R.layout.kategorigrid);&#xD;&#xA;            headerSetup();&#xD;&#xA;            setNavigation(HOME, "Kategori");&#xD;&#xA;            getInitialData();&#xD;&#xA;        }&#xD;&#xA;        public void showKontakActivity(long itemId) {&#xD;&#xA;    		// TODO Auto-generated method stub&#xD;&#xA;    		&#xD;&#xA;    	}&#xD;&#xA;    	protected void onRestart() {&#xD;&#xA;            super.onRestart();&#xD;&#xA;            setKotaLokasi();&#xD;&#xA;        }&#xD;&#xA;        private void getInitialData() {&#xD;&#xA;            if (!this.myData.checkDataBase() || this.myData.isUpgrade()) {&#xD;&#xA;                this.progressDialog = ProgressDialog.show(this, "", "Loading ...");&#xD;&#xA;                new C00822(new C00811()).start();&#xD;&#xA;                return;&#xD;&#xA;            }&#xD;&#xA;            showKategoriList();&#xD;&#xA;            setKotaLokasi();&#xD;&#xA;            Log.i("KategoryActivity", "set kota lokasi");&#xD;&#xA;        }&#xD;&#xA;        public void showKategoriList() {&#xD;&#xA;            GridView grid = (GridView) findViewById(C0089R.id.gridviewKategori);&#xD;&#xA;            AdapterKategori adapter = new AdapterKategori(this);&#xD;&#xA;            grid.setAdapter(adapter);&#xD;&#xA;            grid.setOnItemClickListener(new C00833(adapter));&#xD;&#xA;        }&#xD;&#xA;        public void showKontakActivity(String idKategori) {&#xD;&#xA;            Intent go = new Intent(this, KontakListActivity.class);&#xD;&#xA;            go.putExtra("idKategori", idKategori);&#xD;&#xA;            startActivity(go);&#xD;&#xA;        }&#xD;&#xA;    }