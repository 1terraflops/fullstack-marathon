const chai = require("chai");
const expect = chai.expect;

const checkBrackets = require("./script");

describe("checkBrackets()", () => {
    it('test1. should return -1', () => {
        expect(checkBrackets()).to.equal(-1);
    });
    it('test2. should return -1', () => {
        expect(checkBrackets(NaN)).to.equal(-1);
    });
    it('test3. should return -1', () => {
        expect(checkBrackets(5)).to.equal(-1);
    });
    it('test4. should return -1', () => {
        expect(checkBrackets(true)).to.equal(-1);
    });
    it('test5. should return -1', () => {
        expect(checkBrackets(3.14)).to.equal(-1);
    });
    it('test6. should return 0', () => {
        expect(checkBrackets("()")).to.equal(0);
    });
    it('test7. should return 1', () => {
        expect(checkBrackets("(")).to.equal(1);
    });
    it('test8. should return 1', () => {
        expect(checkBrackets(")")).to.equal(1);
    });
    it('test9. should return 2', () => {
        expect(checkBrackets(")(")).to.equal(2);
    });
    it('test10. should return 0', () => {
        expect(checkBrackets("(test)")).to.equal(0);
    });
    it('test11. should return 0', () => {
        expect(checkBrackets("te(s)t")).to.equal(0);
    });
    it('test12. should return 2', () => {
        expect(checkBrackets("te)s(tt")).to.equal(2);
    });
    it('test13. should return 1', () => {
        expect(checkBrackets("((test)")).to.equal(1);
    })
    it('test14. should return 5', () => {
        expect(checkBrackets("))((test()(")).to.equal(5);
    });
    it('test15. should return 2', () => {
        expect(checkBrackets("1)()(())2(()")).to.equal(2);
    });
});