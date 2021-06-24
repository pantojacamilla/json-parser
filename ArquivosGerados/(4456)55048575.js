    function compareTwoObjects(ObA, ObB) {&#xD;&#xA;      const { a, b, c } = ObA;&#xD;&#xA;      const { a:d, b:e, c:f } = ObB;&#xD;&#xA;      if (&#xD;&#xA;        ((a === d && (a !== e && a !== f))&#xD;&#xA;        || (a === e && (a !== d && a !== f))&#xD;&#xA;        || (a === f && (a !== e && a !== d)))&#xD;&#xA;        || ((b === d && (b !== e && b !== f))&#xD;&#xA;        || (b === e && (b !== d && b !== f))&#xD;&#xA;        || (b === f && (b !== e && b !== d)))&#xD;&#xA;        || ((c === d && (c !== e && c !== f))&#xD;&#xA;        || (c === e && (c !== d && c !== f))&#xD;&#xA;        || (c === f && (c !== e && c !== d)))&#xD;&#xA;      ) {&#xD;&#xA;        return true;&#xD;&#xA;      }&#xD;&#xA;      return false;&#xD;&#xA;    }&#xD;&#xA;    const ObA = {a: 1, b: 2, c: 3};&#xD;&#xA;    const ObB0 = {a: 4, b: 5, c: 6};	// false&#xD;&#xA;    const ObB1 = {a: 4, b: 4, c: 4};	// false&#xD;&#xA;    const ObB2 = {a: 1, b: 1, c: 1};	// false&#xD;&#xA;    const ObB3 = {a: 2, b: 2, c: 2};	// false&#xD;&#xA;    const ObB4 = {a: 3, b: 3, c: 3};	// false&#xD;&#xA;    const ObB5 = {a: 1, b: 1, c: 7};	// false&#xD;&#xA;    const ObB6 = {a: 7, b: 2, c: 2};	// false&#xD;&#xA;    const ObB7 = {a: 7, b: 3, c: 3};	// false&#xD;&#xA;    const ObB8 = {a: 2, b: 3, c: 4};  // Should be false&#xD;&#xA;    const ObB9 = {a: 3, b: 7, c: 3};	// false&#xD;&#xA;    const ObB10 = {a: 5, b: 2, c: 3};	// true&#xD;&#xA;    const ObB11 = {a: 1, b: 5, c: 6};	// true&#xD;&#xA;    const ObB12 = {a: 0, b: 5, c: 3};	// true&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB0));&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB1));&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB2));&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB3));&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB4));&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB5));&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB6));&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB7));&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB8));&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB9));&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB10));&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB11));&#xD;&#xA;    console.log(compareTwoObjects(ObA, ObB12));