    items = [&#xD;&#xA;      {                   //< -- - new object generated inside items array&#xD;&#xA;        tag: "label"        //< -- with values from expression Object Literal&#xD;&#xA;        id = "note_title"        &#xD;&#xA;      },                     &#xD;&#xA;      {&#xD;&#xA;        tag: "input",&#xD;&#xA;        name: "title",&#xD;&#xA;        id: "note_title",&#xD;&#xA;        sizeAttr: {&#xD;&#xA;          "name": "maxLength",&#xD;&#xA;          "value": "100"&#xD;&#xA;        },&#xD;&#xA;        type: "text",&#xD;&#xA;        lable: function() {              //< --  expression   &#xD;&#xA;          items.push({&#xD;&#xA;            tag: "label",&#xD;&#xA;            for: this.id&#xD;&#xA;          })&#xD;&#xA;        }()                          //< --   self-invoked&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        tag: "textarea",&#xD;&#xA;        name: "note",&#xD;&#xA;        id: "note_body",&#xD;&#xA;        sizeAttr: {&#xD;&#xA;          name: "rows",&#xD;&#xA;          "value": "5"&#xD;&#xA;        },&#xD;&#xA;        type: "text",&#xD;&#xA;        label: {&#xD;&#xA;          "for": "note_body"&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    ]