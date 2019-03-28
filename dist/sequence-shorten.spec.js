const testSequenceNumber = 19950824;
const testSequenceNumberHash = 'bvShE';
const SequenceShorten = require('./sequence-shorten.ts').default;
const seqShorten = new SequenceShorten();
it('Encode sequence number', () => {
    expect(seqShorten.encode(testSequenceNumber)).toBe(testSequenceNumberHash);
});
it('Decode sequence number', () => {
    expect(seqShorten.decode(testSequenceNumberHash)).toBe(testSequenceNumber);
});
