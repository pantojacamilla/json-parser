    Ext.define('ES.view.Layout.Toolbar.Toolbar', {&#xD;&#xA;      extend: 'Ext.toolbar.Toolbar',&#xD;&#xA;      alias: 'widget.tb',&#xD;&#xA;      requires: [&#xD;&#xA;        'Ext.layout.container.Fit',&#xD;&#xA;        'ES.view.Layout.Locale.Translation'&#xD;&#xA;      ],&#xD;&#xA;      controller: 'toolbar',&#xD;&#xA;      viewModel: 'toolbar',&#xD;&#xA;      items: ["<-", {&#xD;&#xA;          xtype: 'image',&#xD;&#xA;          alt: 'logo',&#xD;&#xA;          id: 'logo',&#xD;&#xA;          src: 'ext/resources/images/logo.png',&#xD;&#xA;          width: 90,&#xD;&#xA;          height: 35,&#xD;&#xA;          style: {&#xD;&#xA;            "margin-left": "-16px"&#xD;&#xA;          }&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          xtype: 'tbspacer',&#xD;&#xA;          width: 2&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          xtype: 'translationbtn'&#xD;&#xA;        },&#xD;&#xA;        //add a vertical seperator bar between toolbar items&#xD;&#xA;        {xtype: 'tbspacer', width: 450},&#xD;&#xA;        {&#xD;&#xA;          //this is where i want to place these icons&#xD;&#xA;        },&#xD;&#xA;        "->", {&#xD;&#xA;          xtype: 'image',&#xD;&#xA;          alt: 'project_logo',&#xD;&#xA;          src: 'ext/resources/images/project_logo.png',&#xD;&#xA;          width: 140,&#xD;&#xA;          height: 60,&#xD;&#xA;          style: {&#xD;&#xA;            "margin-right": "20px"&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;      ]&#xD;&#xA;    });