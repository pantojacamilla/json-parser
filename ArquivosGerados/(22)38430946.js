    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e) {&#xD;&#xA;      SQLHelper a = new SQLHelper(SQLHelper.ConnectionStrings.KernelConnectionString);&#xD;&#xA;      DataTable newdt = DataHelper.GetProductAdditionalObjects(11);&#xD;&#xA;      for (int i = 0; i < newdt.Rows.Count; i++) {&#xD;&#xA;        if (int.Parse(newdt.Rows[i]["PROD_OBJECT_SPECS_ID"].ToString()) == 1) {&#xD;&#xA;          byte[] img = Converter.ObjectToByteArray(newdt.Rows[i]["OBJECT_BINARIES"]); //Convert Object to Byte Array&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      GridDataItem item = e.Item as GridDataItem;&#xD;&#xA;      if (item != null) {&#xD;&#xA;        (item["BinaryImageColumn"].Controls[0] as RadBinaryImage).DataValue = img;&#xD;&#xA;      }&#xD;&#xA;    }