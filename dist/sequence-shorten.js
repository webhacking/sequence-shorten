"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SequenceShorten {
    constructor(encoder, decoder) {
        this._indexOne = 0;
        this._indexTwo = 26;
        this._indexThree = 52;
        this.charset = `${new Array(26)
            .fill(1)
            .map((_, i) => String.fromCharCode(65 + i).toLowerCase())
            .toString()
            .replace(/,/g, '')}${new Array(26)
            .fill(1)
            .map((_, i) => String.fromCharCode(65 + i))
            .toString()
            .replace(/,/g, '')}0123456789`;
        this.base = this.charset.length;
        this._a = this._lookUpCharset({})[this.charset[this._indexOne]];
        this._A = this._lookUpCharset({})[this.charset[this._indexTwo]];
        this._0 = this._lookUpCharset({})[this.charset[this._indexThree]];
        this._z = this._lookUpCharset({})['z'];
        this._Z = this._lookUpCharset({})['Z'];
        this._9 = this._lookUpCharset({})['9'];
        this.encoder = encoder || (x => x);
        this.decoder = decoder || (x => x);
    }
    _lookUpCharset(charsetByIndex) {
        for (let i = 0, l = this.charset.length; i < l; i++) {
            const char = this.charset[i];
            charsetByIndex[char] = char.charCodeAt(0);
        }
        return charsetByIndex;
    }
    encode(seqNum) {
        seqNum = this.encoder(seqNum);
        const url = [];
        while (seqNum) {
            url.push(this.charset[seqNum % this.base]);
            seqNum = ~~(seqNum / this.base);
        }
        return url.reverse().join('');
    }
    decode(hashSeqNum) {
        let id = 0;
        for (let i = 0, l = hashSeqNum.length; i < l; i++) {
            const charCode = this._lookUpCharset({})[hashSeqNum[i]];
            if (this._a <= charCode && charCode <= this._z) {
                id = id * this.base + charCode - this._a;
            }
            if (this._A <= charCode && charCode <= this._Z) {
                id = id * this.base + charCode - this._A + this._indexTwo;
            }
            if (this._0 <= charCode && charCode <= this._9) {
                id = id * this.base + charCode - this._0 + this._indexThree;
            }
        }
        id = this.decoder(id);
        return id;
    }
}
exports.default = SequenceShorten;
