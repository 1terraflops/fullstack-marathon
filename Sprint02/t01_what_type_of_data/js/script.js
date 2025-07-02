const int = 5;
const bigInt = BigInt(1234567890123456789012345);
const string = "test";
const bool = true;
const Null = null;
const undef = undefined;
const object = { id: 1, name: "test" };
const symbol = Symbol("@");
const func = () => { return "hello js"; };

window.alert(`int is ${typeof int};\nbigInt is ${typeof bigInt};\nstring is ${typeof string};\nbool is ${typeof bool};\nNull is ${typeof Null};\nundef is ${typeof undef};\nobject is ${typeof object};\nsymbol is ${typeof symbol};\nfunc is ${typeof func};`);