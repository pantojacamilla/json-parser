    const option = x => f => isAssigned(x) ? option(f(x)) : none;&#xD;&#xA;    const option_ = x => f => isAssigned(x) ? flatten(option(f(x))) : none;&#xD;&#xA;    const none = option(null);&#xD;&#xA;    const of = x => option(x); // return&#xD;&#xA;    const flatten = F => { // it gets a bit ugly here&#xD;&#xA;      let y;&#xD;&#xA;      F(z => (y = z, z));&#xD;&#xA;      return y;&#xD;&#xA;    };&#xD;&#xA;    // auxiliary functions&#xD;&#xA;    const compn = (...fs) => x => fs.reduceRight((acc, f) => f(acc), x);&#xD;&#xA;    const getOrElse = x => F => {&#xD;&#xA;      let y;&#xD;&#xA;      F(z => (y = z, z));&#xD;&#xA;      return isAssigned(y) ? y : x;&#xD;&#xA;    };&#xD;&#xA;    const isAssigned = x => x !== null && x !== undefined;&#xD;&#xA;    const log = prefix => x => (console.log(prefix, x), x);&#xD;&#xA;    const head = xs => xs[0];&#xD;&#xA;    const head_ = xs => option(xs[0]);&#xD;&#xA;    const sqr = x => x * x;&#xD;&#xA;    // some data&#xD;&#xA;    const xs = [5],&#xD;&#xA;     ys = [];&#xD;&#xA;    // run&#xD;&#xA;    const w = option(xs) (head),&#xD;&#xA;     x = option(ys) (head),&#xD;&#xA;     y = option_(xs) (head_),&#xD;&#xA;     z = option_(ys) (head_);&#xD;&#xA;    log("square head  of xs:") (compn(sqr, getOrElse(1)) (w)); // 25&#xD;&#xA;    log("square head  of ys:") (compn(sqr, getOrElse(0)) (x)); // 0&#xD;&#xA;    log("square head_ of xs:") (compn(sqr, getOrElse(0)) (y)); // 25&#xD;&#xA;    log("square head_ of ys:") (compn(sqr, getOrElse(0)) (z)); // 0