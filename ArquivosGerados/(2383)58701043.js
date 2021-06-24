    tinymce.PluginManager.add('test_containers', function(editor, url) {&#xD;&#xA;      editor.addButton('test_containers2', {&#xD;&#xA;        title: 'Container 2',&#xD;&#xA;        text: 'Container 2',&#xD;&#xA;        onclick: function() {&#xD;&#xA;          editor.windowManager.open({&#xD;&#xA;            title: 'Test Container',&#xD;&#xA;            body: [{&#xD;&#xA;              type: 'container',&#xD;&#xA;              layout: 'stack',&#xD;&#xA;              columns: 2,&#xD;&#xA;              minWidth: 500,&#xD;&#xA;              minHeight: 500,&#xD;&#xA;              items: [{&#xD;&#xA;                type: 'textbox',&#xD;&#xA;                name: 'question1'&#xD;&#xA;              }, {&#xD;&#xA;                type: 'textbox',&#xD;&#xA;                name: 'question2'&#xD;&#xA;              }, ]&#xD;&#xA;            }],&#xD;&#xA;            onsubmit: function(e) {&#xD;&#xA;              ed.insertContent(e.data.question1 + e.data.question2);&#xD;&#xA;            }&#xD;&#xA;          });&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    });&#xD;&#xA;    tinymce.init({&#xD;&#xA;      selector: '#mytextarea',&#xD;&#xA;      plugins: 'colorpicker  test_containers',&#xD;&#xA;      toolbar: 'test_containers2'&#xD;&#xA;    });&#xD;&#xA;    // Taken from core plugins&#xD;&#xA;    var editor = tinymce.activeEditor;&#xD;&#xA;    function createColorPickAction() {&#xD;&#xA;      var colorPickerCallback = editor.settings.color_picker_callback;&#xD;&#xA;      if (colorPickerCallback) {&#xD;&#xA;        return function() {&#xD;&#xA;          var self = this;&#xD;&#xA;          colorPickerCallback.call(&#xD;&#xA;            editor,&#xD;&#xA;            function(value) {&#xD;&#xA;              self.value(value).fire('change');&#xD;&#xA;            },&#xD;&#xA;            self.value()&#xD;&#xA;          );&#xD;&#xA;        };&#xD;&#xA;      }&#xD;&#xA;    }