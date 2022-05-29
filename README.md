# Chair Flight Question Bank

An Open source aviation question bank. **Still in (super early) development ;)**

<p align="center">
  <img src="https://img.shields.io/badge/coverage%20010-2%2F507%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20021-82%2F662%2012%25-red" />
  <img src="https://img.shields.io/badge/coverage%20022-30%2F471%206%25-red" />
  <img src="https://img.shields.io/badge/coverage%20031-0%2F86%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20032-0%2F243%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20033-0%2F118%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20034-0%2F85%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20040-0%2F363%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20050-0%2F465%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20061-15%2F119%2013%25-red" />
  <img src="https://img.shields.io/badge/coverage%20062-73%2F328%2022%25-red" />
  <img src="https://img.shields.io/badge/coverage%20071-0%2F388%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20081-2%2F498%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20082-0%2F204%200%25-red" />
  <img src="https://img.shields.io/badge/coverage%20090-0%2F79%200%25-red" />
</p>

## Contributing

All content contributions are more than welcome. Content is written using
[MDX](https://mdxjs.com/), which is a superset of
[Markdown](https://en.wikipedia.org/wiki/Markdown). All boilerplate is already
put in place, so if you want to write some content, or add questions... go
ahead!

## Versioning

The goal is to use semantic version, nevertheless until version 1.0.0 is
released, we reserve the right of doing breaking changes unannounced on minor
releases. (i.e version `0.0.22` may contain breaking changes from version
`0.0.21`).

## Using it

This package is distributed
[via NPM](https://www.npmjs.com/package/chair-flight-question-bank). The
distribution includes all MDX files, under `lib/content`, a json export with
metadata of all the content, and the same metadata export as a `JS`/`TS`
friendly package.

Minimalistic Example:

```tsx
<Question id="123" lo={["021.04.03.04.01"]}>
  <Text variant="oneCorrect">What color is the sky?</Text>
  <Option alwaysCorrect>Blue</Option>
  <Option>Red</Option>
  <Option>Green</Option>
  <Option>Orange</Option>
</Subject>
```

Can be used to generate:

```md
> What color is the sky?

- Blue **Correct!**
- Red
- Green
- Orange
```

A more complicated example

```tsx
<Question id="123" lo={["021.04.03.04.01"]}>
  <Text key={1} variant="oneCorrect">What color is the <Subject />?</Text>
  <Option key={1}  subject={[["sky"]]}>Blue</Option>
  <Option key={1}  subject={[["ground"]]}>Green</Option>
  <Option key={1} >Red</Option>
  <Option key={1} >Orange</Option>

  <Text key={[2,3]} variant="oneCorrect">What statement is correct?</Text>
  <Text key={[2,3]} variant="multipleCorrect" select={4}>What statements are correct?</Text>
  <Option key={2} subject={[["sky"]]}>the <Subject /> is Blue</Option>
  <Option key={2} subject={[["ground"]]}>The <Subject /> is Green</Option>
  <Option key={2}>The <Subject /> is red</Option>
  <Option key={2}>The <Subject /> is Orange</Option>

  <Option key={3} subject={[["sky"]]}>the <Subject /> is supposed to be above you</Option>
  <Option key={3} subject={[["ground"]]}>The <Subject /> is supposed to be below you</Option>
</Subject>
```

Can be used to generate, for example:

```md
> What statements are correct?
>
> 1. the Sky is Blue
> 2. the Ground is Orange
> 3. the sky is supposed to be above you
> 4. the ground is supposed to be below you

- 1
- 1, 3, 4 **Correct!**
- 3, 4
- 1, 2, 3, 4
```
