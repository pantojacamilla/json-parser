    $(document).ready(function() {&#xD;&#xA;      var table = new CustomFieldTable();&#xD;&#xA;      table.init();&#xD;&#xA;    });&#xD;&#xA;    function Table() {&#xD;&#xA;      var self = this;&#xD;&#xA;      self.table = "";&#xD;&#xA;      self.table_data = [];&#xD;&#xA;      self.reload = function() {&#xD;&#xA;        self.table_data = ["obj1", "obj2", "obj3"];&#xD;&#xA;        self.createList();&#xD;&#xA;      }&#xD;&#xA;      self.createList = function() {&#xD;&#xA;        console.log("Create List Function");&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    CustomFieldTable.prototype = new Table();&#xD;&#xA;    CustomFieldTable.prototype.constructor = CustomFieldTable;&#xD;&#xA;    function CustomFieldTable() {&#xD;&#xA;      var self = this;&#xD;&#xA;      self.init = function() {&#xD;&#xA;        self.table = "project_custom_field";&#xD;&#xA;        self.reload();&#xD;&#xA;      }&#xD;&#xA;      self.createList = function() {&#xD;&#xA;        console.log("Custom Field create list");&#xD;&#xA;        $("#custom-field-table-tbody").empty();&#xD;&#xA;        for (var i = 0; i < self.table_data.length; i++) {&#xD;&#xA;          console.log(self.table_data[i]);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    }