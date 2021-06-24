    const transduce = (xform, iterator, init, data) =>&#xD;&#xA;      reduce(xform(iterator), init, data);&#xD;&#xA;    const mapping = (xf, reducer) => (acc, item) => reducer(acc, xf(item));&#xD;&#xA;    const filtering = (predicate, reducer) => (acc, item) => predicate(item) ?&#xD;&#xA;      reducer(acc, item) :&#xD;&#xA;      acc;&#xD;&#xA;    const arrReducer = (acc, item) => [...acc, item];&#xD;&#xA;    const transformer = compose(filtering(even), mapping(double));&#xD;&#xA;    const performantDoubleEven = transduce(transformer, arrReducer, [])&#xD;&#xA;    performantDoubleEven([1, 2, 3, 4, 5]); // -> [4, 8] with no temporary arrays created