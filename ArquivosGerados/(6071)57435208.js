    package com.example.boc.PhoneNumbers;&#xD;&#xA;    import androidx.annotation.NonNull;&#xD;&#xA;    import androidx.appcompat.app.AppCompatActivity;&#xD;&#xA;    import androidx.recyclerview.widget.RecyclerView;&#xD;&#xA;    import android.content.Context;&#xD;&#xA;    import android.os.Bundle;&#xD;&#xA;    import android.view.View;&#xD;&#xA;    import android.widget.Button;&#xD;&#xA;    import android.widget.EditText;&#xD;&#xA;    import android.widget.LinearLayout;&#xD;&#xA;    import android.widget.TextView;&#xD;&#xA;    import android.widget.Toast;&#xD;&#xA;    import com.example.boc.R;&#xD;&#xA;    import com.example.boc.main.phone_nombers_Activity;&#xD;&#xA;    import com.example.boc.models.Note;&#xD;&#xA;    import com.google.android.gms.tasks.OnCompleteListener;&#xD;&#xA;    import com.google.android.gms.tasks.OnFailureListener;&#xD;&#xA;    import com.google.android.gms.tasks.OnSuccessListener;&#xD;&#xA;    import com.google.android.gms.tasks.Task;&#xD;&#xA;    import com.google.firebase.firestore.CollectionReference;&#xD;&#xA;    import com.google.firebase.firestore.DocumentReference;&#xD;&#xA;    import com.google.firebase.firestore.DocumentSnapshot;&#xD;&#xA;    import com.google.firebase.firestore.FirebaseFirestore;&#xD;&#xA;    import com.google.firebase.firestore.Query;&#xD;&#xA;    import com.google.firebase.firestore.QueryDocumentSnapshot;&#xD;&#xA;    import com.google.firebase.firestore.QuerySnapshot;&#xD;&#xA;    import org.w3c.dom.Text;&#xD;&#xA;    import java.util.ArrayList;&#xD;&#xA;    import java.util.Map;&#xD;&#xA;    public class searchActivity extends phone_nombers_Activity {&#xD;&#xA;        private DocumentSnapshot documentSnapshot;&#xD;&#xA;        public TextView resultsTxt , userinput ;&#xD;&#xA;        public FirebaseFirestore db = FirebaseFirestore.getInstance();&#xD;&#xA;        public Note note ;&#xD;&#xA;        public LinearLayout layout ;&#xD;&#xA;        private ArrayList<Note> mNotes = new ArrayList<>();&#xD;&#xA;        private DocumentReference noteRef = db.collection("notes").document();&#xD;&#xA;        private CollectionReference notesCollectionRef = db.collection("notes");&#xD;&#xA;        @Override&#xD;&#xA;        protected void onCreate(Bundle savedInstanceState) {&#xD;&#xA;            super.onCreate( savedInstanceState );&#xD;&#xA;            setContentView( R.layout.activity_search );&#xD;&#xA;            final EditText userinput = findViewById( R.id.userInputtxt );&#xD;&#xA;            final Button   findbutton = findViewById( R.id.findBtn );&#xD;&#xA;            Button   openresultBtn = findViewById( R.id.openresult );&#xD;&#xA;            final TextView previewResultTextview = findViewById( R.id.resultsTxt );&#xD;&#xA;            FirebaseFirestore db = FirebaseFirestore.getInstance();&#xD;&#xA;            CollectionReference notesCollectionRef = db&#xD;&#xA;                    .collection("notes");&#xD;&#xA;            Query notesQuery = null;&#xD;&#xA;            if(documentSnapshot != null){&#xD;&#xA;                notesQuery = notesCollectionRef;&#xD;&#xA;            }&#xD;&#xA;            else{&#xD;&#xA;                notesQuery = notesCollectionRef&#xD;&#xA;                        .orderBy("timestamp", Query.Direction.ASCENDING);&#xD;&#xA;            }&#xD;&#xA;            notesQuery.get().addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {&#xD;&#xA;                @Override&#xD;&#xA;                public void onComplete(@NonNull Task<QuerySnapshot> task) {&#xD;&#xA;                    if(task.isSuccessful()){&#xD;&#xA;                        for(QueryDocumentSnapshot document: task.getResult()){&#xD;&#xA;                            Note note = document.toObject(Note.class);&#xD;&#xA;                            mNotes.add(note);&#xD;&#xA;            final String datafromdb = note.getTitle();&#xD;&#xA;            findbutton.setOnClickListener( new View.OnClickListener() {&#xD;&#xA;                @Override&#xD;&#xA;                public void onClick(View v) {&#xD;&#xA;                    final String userinputString = userinput.getText().toString();&#xD;&#xA;                    if ( datafromdb.contains( userinputString )  ){&#xD;&#xA;                        previewResultTextview.setText( datafromdb );&#xD;&#xA;                    }&#xD;&#xA;                    else {&#xD;&#xA;                        previewResultTextview.setText("no result found");&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            } );&#xD;&#xA;        }}}});&#xD;&#xA;    }}