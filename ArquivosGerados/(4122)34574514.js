        program ideone;&#xD;&#xA;        const m = 7;&#xD;&#xA;        const n = 5;&#xD;&#xA;        var  x:Real;&#xD;&#xA;        var  y:Real;&#xD;&#xA;        var  z:Real;&#xD;&#xA;        var  q:Real;&#xD;&#xA;        var  r:Real;&#xD;&#xA;        procedure  multiply();&#xD;&#xA;        var a:Real;&#xD;&#xA;        var b:Real;&#xD;&#xA;        begin  a := x;  b := y;  z := 0;&#xD;&#xA;          while b > 0 do&#xD;&#xA;            begin  &#xD;&#xA;              if odd(Qword(b)) then z := z + a;&#xD;&#xA;              writeln('x');&#xD;&#xA;              a := 2*a;  &#xD;&#xA;              b := b/2;&#xD;&#xA;            end&#xD;&#xA;        end;&#xD;&#xA;        begin &#xD;&#xA;          x := m;  y := n;  &#xD;&#xA;          multiply();&#xD;&#xA;          writeln(z);&#xD;&#xA;        end.