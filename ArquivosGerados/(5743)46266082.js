    using System;&#xD;&#xA;    using System.Collections.Generic;&#xD;&#xA;    using System.Linq;&#xD;&#xA;    using System.Web;&#xD;&#xA;    using System.Web.UI;&#xD;&#xA;    using System.Web.UI.WebControls;&#xD;&#xA;    namespace XEx04Quotation&#xD;&#xA;    {&#xD;&#xA;        public partial class Confirm : System.Web.UI.Page&#xD;&#xA;        {&#xD;&#xA;            protected void Page_Load(object sender, EventArgs e)&#xD;&#xA;            {&#xD;&#xA;                UnobtrusiveValidationMode = UnobtrusiveValidationMode.None;&#xD;&#xA;                if (Session["SalesPrice"] != null)&#xD;&#xA;                {&#xD;&#xA;                    lblSalesPrice.Text = Convert.ToDecimal(Session["SalesPrice"]).ToString("c");&#xD;&#xA;                }&#xD;&#xA;                if(Session["Discount"]!= null) &#xD;&#xA;                {&#xD;&#xA;                    lblDiscountAmount.Text = Convert.ToDecimal(Session["Discount"]).ToString("c");&#xD;&#xA;                }&#xD;&#xA;                if(Session["TotalPrice"] != null)&#xD;&#xA;                {&#xD;&#xA;                    lblTotalPrice.Text = Convert.ToDecimal(Session["TotalPrice"]).ToString("c");&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    }