    /*&#xD;&#xA;     Fibonacci sequence is calculated by the formula An = An-1 + An-2&#xD;&#xA;     @param prev An-2&#xD;&#xA;     @param next An-1&#xD;&#xA;     @param n the first n numbers to print&#xD;&#xA;    */&#xD;&#xA;    var count = 0; // keeps track of which number we are on&#xD;&#xA;    function fibonacci(prev, next, n) {&#xD;&#xA;        // Need to subtract 2 or else it will print the first 7 numbers instead of 5 &#xD;&#xA;        return count++ < n - 2 ? fibonacci(Math.max(prev,next), prev+next, n) + "," : next;&#xD;&#xA;    }&#xD;&#xA;    document.querySelector('button').addEventListener('click', function() {&#xD;&#xA;      console.log(fibonacci(1, 2, 5));&#xD;&#xA;    });