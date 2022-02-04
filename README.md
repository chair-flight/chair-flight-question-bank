# Chair Flight Question Bank

An Open source aviation question bank. **Still in (super early) development ;)**

<a>
<img href="https://img.shields.io/badge/coverage%20010-0%2F507%200%25-red"  />
</a>

<p align="center">
  <img src="https://img.shields.io/badge/coverage%20010-0%2F507%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20021-41%2F669%206%25-red" />
  <img src="https://img.shields.io/badge/coverage%20022-1%2F471%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20031-0%2F86%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20032-0%2F243%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20033-0%2F118%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20034-0%2F85%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20040-0%2F363%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20050-0%2F465%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20061-0%2F119%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20062-0%2F328%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20071-0%2F388%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20081-0%2F498%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20082-0%2F204%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20090-0%2F79%200%25-red" />
</p>

## Contributing

All content contributions are more than welcome. Content is written using [MDX](https://mdxjs.com/), which is a superset of [Markdown](https://en.wikipedia.org/wiki/Markdown). All boilerplate is already put in place, so if you want to write some content, or add questions... go ahead!

## Versioning

The goal is to use semantic version, nevertheless until version 1.0.0 is released, we reserve the right of doing breaking changes unannounced on minor releases. (i.e version `0.0.22` may contain breaking changes from version `0.0.21`).

## Using it

This package is distributed [via NPM](https://www.npmjs.com/package/chair-flight-question-bank). The distribution includes all MDX files, under `lib/content`, a json export with metadata of all the content, and the same metadata export as a `JS`/`TS` friendly package.

## Question variants

Questions are always written in a very limited subset of JSX that does not allow for variables... basically HTML, with custom tags (so, no variables allowed...). Each variant represents a different type of question. Each question has three mandatory parameters

### Correct

Example:

```jsx
<Question id="uniqueId" variant="correct" lo={["021.04.03.04.01"]}>
  <Text variant="oneCorrect">
    The correct statement in relation to the autobrake system is...
  </Text>
  <Text variant="oneTwo">
    Which of these statements in relation to the autobrake system are correct?
  </Text>
  <Text variant="multipleCorrect" select={5}>
    Which of these statements in relation to the autobrake system are correct?
  </Text>
  <Option
    id="uniqueId-1"
    correct
    why="This is true, and required by technical requirements for type certification."
  >
    Without pilot interference an autobrake system continues to operate until
    standstill
  </Option>
  <Option id="uniqueId-2" correct>
    During landing and RTO, an autobrake keeps operating until the pilot presses
    the brake pedals
  </Option>
  <Option id="uniqueId-3" correct>
    During landing an autobrake keeps operating when reverse thrust is selected
  </Option>
  <Option
    id="uniqueId-4"
    why="Not correct since in most aircraft the autobrake engages a couple of seconds after touch down"
  >
    An armed autobrake system will always try to achieve the selected
    deceleration level directly after main wheel touchdown
  </Option>
  <Option
    id="uniqueId-5"
    why="Not correct since it also depends on pressure altitude, temperature, and a myriad of other factors"
  >
    For a given touchdown speed on a dry runway without the use of reverse
    thrust, the stopping distance solely depends on the selected ABS setting and
    weight of the aeroplane.
  </Option>
  <Option
    id="uniqueId-6"
    why="This is not necessarily true, and depends a lot on aircraft type."
  >
    A take-off warning will be generated if the autobrake system has not been
    armed.
  </Option>
</Question>
```

Can be used to generate:

```yml
# oneCorrect sub-variant
The correct statement in relation to the autobrake system is...
- An armed autobrake system will always try to achieve the selected deceleration level directly after main wheel touchdown
- During landing and RTO, an autobrake keeps operating until the pilot presses the brake pedals # CORRECT!
- For a given touchdown speed on a dry runway without the use of reverse thrust, the stopping distance solely depends on the selected ABS setting and weight of the aeroplane.
- A take-off warning will be generated if the autobrake system has not been armed.


# oneTwo sub-variant
Which of these statements in relation to the autobrake system are correct?
  1) During landing and RTO, an autobrake keeps operating until the pilot presses the brake pedals
  2) A take-off warning will be generated if the autobrake system has not been armed.
- 1 and 2
- 1 only # CORRECT!
- 2 only
- none

# multipleCorrect sub-variant
Which of these statements in relation to the autobrake system are correct?
  1) An armed autobrake system will always try to achieve the selected deceleration level directly after main wheel touchdown
  2) During landing and RTO, an autobrake keeps operating until the pilot presses the brake pedals
  3) A take-off warning will be generated if the autobrake system has not been armed.
  4) During landing an autobrake keeps operating when reverse thrust is selected
  5) Without pilot interference an autobrake system continues to operate until standstill
- 2 and 4 # Correct!
- 1, 2, and 3
- 2, and 3
- 4, and 5
```

### Definition

Example:

```jsx
<Question variant="definition" id="uniqueId" lo="021.01.01.01.01">
  <Text variant="oneCorrect">
    Which statements about <Subject /> are correct?
  </Text>
  <Text variant="oneTwo">
    Which Of these statements about <Subject /> are correct?
  </Text>
  <Option id="uniqueId-1" subject="Structural design principles">
    Fail Safe implies multiple load Paths
  </Option>
  <Option id="uniqueId-2" subject="Structural design principles">
    A safe life structure is based on use during a limited time period or number
    of cycles
  </Option>
  <Option id="uniqueId-3">
    Fail Safe implies the structure will fail, when one component fails
  </Option>
  <Option id="uniqueId-4">
    Safe life is the preferred design technique for aircraft
  </Option>
</Question>
```

Can be used to generate:

```yml
# oneCorrect sub-variant
The correct statement in relation to the autobrake system is...
- An armed autobrake system will always try to achieve the selected deceleration level directly after main wheel touchdown
- During landing and RTO, an autobrake keeps operating until the pilot presses the brake pedals # CORRECT!
- For a given touchdown speed on a dry runway without the use of reverse thrust, the stopping distance solely depends on the selected ABS setting and weight of the aeroplane.
- A take-off warning will be generated if the autobrake system has not been armed.
```
