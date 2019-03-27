export default class SequenceShorten {
    constructor() {
        this._indexOne = 0;
        this._indexTwo = 26;
        this._indexThree = 52;
        this.charset = `${new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i).toLowerCase()).toString().replace(/,/g, "")}${new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i)).toString().replace(/,/g, "")}0123456789`;
        this.base = this.charset.length;
        const charset = this.charset;
        this.lookup = (function (charsetByIndex) {
            for (let i = 0, l = charset.length; i < l; i++) {
                const char = charset[i];
                charsetByIndex[char] = char.charCodeAt(0);
            }
            return charsetByIndex;
        }({}));
        this._a = this.lookup[this.charset[this._indexOne]];
        this._A = this.lookup[this.charset[this._indexTwo]];
        this._0 = this.lookup[this.charset[this._indexThree]];
        this._z = this.lookup['z'];
        this._Z = this.lookup['Z'];
        this._9 = this.lookup['9'];
    }
    encode(seqNum) {
        const url = [];
        while (seqNum) {
            url.push(this.charset[seqNum % this.base]);
            seqNum = ~~(seqNum / this.base);
        }
        return url.reverse().join('');
    }
    decode(seqNum) {
        let id = 0;
        for (let i = 0, l = seqNum.length; i < l; i++) {
            const charCode = this.lookup[seqNum[i]];
            if (this._a <= charCode && charCode <= this._z) {
                id = ((id * this.base) + charCode) - this._a;
            }
            if (this._A <= charCode && charCode <= this._Z) {
                id = ((id * this.base) + charCode) - this._A + this._indexTwo;
            }
            if (this._0 <= charCode && charCode <= this._9) {
                id = ((id * this.base) + charCode) - this._0 + this._indexThree;
            }
        }
        return id;
    }
}
//# sourceMappingURL=sequence-shorten.js.map