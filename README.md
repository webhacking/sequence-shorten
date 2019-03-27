# Sequence Shorten

Shorten your sequence number or hash key.

## Install

```
npm i sequence-shorten
```

## Usage

If u want to encode ur sequence number or hash key.

```typescript
import SequenceShorten from './sequence-shorten';
const sequenceNumber = 19950824;


// Result: bvShE
(new SequenceShorten).encode(sequenceNumber);
```

Or want to decode like below.
```typescript

import SequenceShorten from './sequence-shorten';
const sequenceNumber = 19950824;
const encodedNumber = (new SequenceShorten).encode(sequenceNumber);

// Result: 19950824
(new SequenceShorten).decode(encodedNumber);

```

## Comment

- There must be no x1, x2 (with x1 ≠ x2) that will make f(x1) = f(x2),
- and for every y you must be able to find an x so that f(x) = y.

