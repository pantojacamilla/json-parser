    string[] cArray = new string[10];&#xD;&#xA;    int counter, count;&#xD;&#xA;    try {&#xD;&#xA;      StreamReader inputfile;&#xD;&#xA;      inputfile = File.OpenText("Classes.txt");&#xD;&#xA;      classList.Items.Clear();&#xD;&#xA;      while (!inputfile.EndOfStream) {&#xD;&#xA;        cArray[count] = inputfile.ReadLine();&#xD;&#xA;        count++;&#xD;&#xA;      }&#xD;&#xA;      inputfile.Close();&#xD;&#xA;    } catch (Exception e) {&#xD;&#xA;      MessageBox.Show(e.Message, "Loading Error!");&#xD;&#xA;    }