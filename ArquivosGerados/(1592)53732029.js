    const loop = f => {&#xD;&#xA;       let acc = f();&#xD;&#xA;       while (acc && acc.type === tailRec)&#xD;&#xA;         acc = f(...acc.args);&#xD;&#xA;       return acc;&#xD;&#xA;    };&#xD;&#xA;    const tailRec = (...args) =>&#xD;&#xA;       ({type: tailRec, args});&#xD;&#xA;    const arrFoldk = f => acc_ => xs =>&#xD;&#xA;      loop((acc = acc_, i = 0) =>&#xD;&#xA;        i === xs.length&#xD;&#xA;          ? acc&#xD;&#xA;          : f(acc) (xs[i]) (acc_ => tailRec(acc_, i + 1)));&#xD;&#xA;    const liftk2 = f => x => y => k =>&#xD;&#xA;      k(f(x) (y));&#xD;&#xA;    const isOdd = n => n & 1 === 1;&#xD;&#xA;    const concat = xs => ys => xs.concat(ys);&#xD;&#xA;    const comp = f => g => x => f(g(x));&#xD;&#xA;    const id = x => x;&#xD;&#xA;    const filterReduce = filter => reduce => acc => x => k =>&#xD;&#xA;      filter(x)&#xD;&#xA;        ? reduce(acc) (x) (k)&#xD;&#xA;        : k(acc);&#xD;&#xA;    const takeReduce = n => reduce => acc => x => k =>&#xD;&#xA;      acc.length === n&#xD;&#xA;        ? reduce(acc) (x) (id)&#xD;&#xA;        : reduce(acc) (x) (k);&#xD;&#xA;    const fx = filterReduce(isOdd),&#xD;&#xA;      fy = takeReduce(3),&#xD;&#xA;      fz = comp(fy) (fx);&#xD;&#xA;    const transducek = (...fs) => xs =>&#xD;&#xA;      arrFoldk(fs.reduce((f, g) => comp(f) (g), id) (liftk2(concat))) ([]);&#xD;&#xA;    const r1 = arrFoldk(fz(liftk2(concat))) ([]) ([1,2,3,4,5,6,7,8,9]);&#xD;&#xA;    const r2 = transducek(fx, fy) ([1,2,3,4,5,6,7,8,9]);&#xD;&#xA;    console.log(r1); // [1,3,5]&#xD;&#xA;    console.log(r2); // xs => ...