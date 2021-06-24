    public class Baby_Diaper extends ActionBarActivity {&#xD;&#xA;    ArrayList<String> selection = new ArrayList<String>();&#xD;&#xA;    TextView final_text;&#xD;&#xA;    Intent i = new Intent(this, Shopping_List.class);&#xD;&#xA;    @Override&#xD;&#xA;    protected void onCreate(Bundle savedInstanceState) {&#xD;&#xA;        super.onCreate(savedInstanceState);&#xD;&#xA;        setContentView(R.layout.activity_baby__diaper);&#xD;&#xA;        final_text = (TextView)findViewById(R.id.final_result_shopping);&#xD;&#xA;        final_text.setEnabled(false);&#xD;&#xA;    }&#xD;&#xA;    public void SelectItem (View view) {&#xD;&#xA;        boolean checked = ((CheckBox) view) .isChecked();&#xD;&#xA;        switch (view.getId())&#xD;&#xA;        {&#xD;&#xA;            case R.id.pampers:&#xD;&#xA;                if(checked)&#xD;&#xA;                {selection.add("Pampers");}&#xD;&#xA;                else&#xD;&#xA;                {&#xD;&#xA;                    selection.remove ("Pampers");&#xD;&#xA;                }&#xD;&#xA;                break;&#xD;&#xA;            case R.id.huggies:&#xD;&#xA;                if(checked)&#xD;&#xA;                {selection.add("Huggies");}&#xD;&#xA;                else&#xD;&#xA;                {&#xD;&#xA;                    selection.remove ("Huggies");&#xD;&#xA;                }&#xD;&#xA;                break;&#xD;&#xA;            case R.id.johnsons:&#xD;&#xA;                if(checked)&#xD;&#xA;                {selection.add("Johnsons");}&#xD;&#xA;                else&#xD;&#xA;                {&#xD;&#xA;                    selection.remove ("Johnsons");&#xD;&#xA;                }&#xD;&#xA;                break;&#xD;&#xA;            case R.id.supreme:&#xD;&#xA;                if(checked)&#xD;&#xA;                {selection.add("Supreme");}&#xD;&#xA;                else&#xD;&#xA;                {&#xD;&#xA;                    selection.remove ("Supreme");&#xD;&#xA;                }&#xD;&#xA;                break;&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    public void addtocart(View view){&#xD;&#xA;        String final_shopping_selection = "";&#xD;&#xA;        for (String Selections  : selection){&#xD;&#xA;            final_shopping_selection = final_shopping_selection + Selections + "\n";&#xD;&#xA;        }&#xD;&#xA;        final_text.setText(final_shopping_selection);&#xD;&#xA;        final_text.setEnabled(true);&#xD;&#xA;    }