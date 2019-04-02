import SequenceShorten from './sequence-shorten';

const testSequenceNumber = 19950824;
const testSequenceNumberHash = 'bvShE';
const seqShorten = new SequenceShorten();

it('Encode sequence number', () => {
  expect(seqShorten.encode(testSequenceNumber)).toBe(testSequenceNumberHash);
});

it('Decode sequence number', () => {
  expect(seqShorten.decode(testSequenceNumberHash)).toBe(testSequenceNumber);
});

it('Customized sequence generator', () => {
  const val = 123456789;
  const seq = new SequenceShorten(x => (x << 4) + 3, x => x >> 4);
  expect(seq.decode(seq.encode(val))).toBe(val);
});
