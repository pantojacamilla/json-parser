    {&#xD;&#xA;      userType: { type: String, lowercase: true },&#xD;&#xA;      contact: {&#xD;&#xA;        email: { type: String, lowercase: true, index: { unique: true, sparse: true } }&#xD;&#xA;      },&#xD;&#xA;      accounts: {&#xD;&#xA;        local: { password: String },&#xD;&#xA;        facebook: { id: String, token: String }&#xD;&#xA;      }&#xD;&#xA;    }