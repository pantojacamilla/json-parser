    $(document).ready(function() {&#xD;&#xA;      var old_arr = [ [1, 1], [2, 8], [3, 12], [4, 13], [5, 23], [6, 30], [7, 41], [8, 44], [9, 50] ];&#xD;&#xA;      var new_arr = old_arr.reduce(function(a, b, c, d) {&#xD;&#xA;        if (a.length) {&#xD;&#xA;          a.push([d[c][0], d[c][1] - d[c - 1][1]])&#xD;&#xA;        } else {&#xD;&#xA;          a = [b]&#xD;&#xA;        }&#xD;&#xA;        return a;&#xD;&#xA;      }, []);&#xD;&#xA;      console.log(new_arr);&#xD;&#xA;    });