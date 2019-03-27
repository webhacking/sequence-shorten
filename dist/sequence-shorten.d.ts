export default class SequenceShorten<T> {
  readonly charset: string;
  readonly base: number;
  readonly lookup: any;
  readonly _indexOne: number;
  readonly _indexTwo: number;
  readonly _indexThree: number;
  readonly _a: number;
  readonly _A: number;
  readonly _0: number;
  readonly _z: string;
  readonly _Z: string;
  readonly _9: string;
  constructor();
  encode(seqNum: number): string;
  decode(seqNum: string): number;
}
