    var matrix = [&#xD;&#xA;      "0000000000000000000",&#xD;&#xA;      "0000001110000000000",&#xD;&#xA;      "0000011111000000000",&#xD;&#xA;      "0000001110000000000",&#xD;&#xA;      "0000000000000000000",&#xD;&#xA;      "0001100000000000000",&#xD;&#xA;      "0001100000000011000",&#xD;&#xA;      "0011100000000011000",&#xD;&#xA;      "0000000000000000000"&#xD;&#xA;    ]&#xD;&#xA;    Array.prototype.extract_components_positions = function(offset) {&#xD;&#xA;      var array = this.map(item => item.split('')).map(str => Array.from(str, Number)),&#xD;&#xA;        default_value = 0,&#xD;&#xA;        result_object = {}&#xD;&#xA;      function test_connection(array, i, j) {&#xD;&#xA;        if (array[i] && array[i][j] === -1) {&#xD;&#xA;          if (!result_object[default_value]) result_object[default_value] = [];&#xD;&#xA;          result_object[default_value].push([j, i]);&#xD;&#xA;          array[i][j] = 1;&#xD;&#xA;          for (var k = offset; k > 0; k--) {&#xD;&#xA;            test_connection(array, i + k, j); // left - right&#xD;&#xA;            test_connection(array, i, j + k); // top - bottom&#xD;&#xA;            test_connection(array, i - k, j); // right - left&#xD;&#xA;            test_connection(array, i, j - k); // bottom - top&#xD;&#xA;          }&#xD;&#xA;          return true&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      array.forEach(function(a) {&#xD;&#xA;        a.forEach(function(b, i, bb) {&#xD;&#xA;          bb[i] = -b&#xD;&#xA;        })&#xD;&#xA;      });&#xD;&#xA;      array.forEach(function(a, i, aa) {&#xD;&#xA;        a.forEach(function(b, j, bb) {&#xD;&#xA;          test_connection(aa, i, j) && default_value++&#xD;&#xA;        })&#xD;&#xA;      })&#xD;&#xA;      return [result_object];&#xD;&#xA;    }&#xD;&#xA;    var result = matrix.extract_components_positions(1);&#xD;&#xA;    console.log(JSON.stringify(result))