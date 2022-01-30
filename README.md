# Chair Flight Question Bank

An Open source aviation question bank. **Still in (super early) development ;)**

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

## Question variants

Questions are always written in a very limited subset of JSX that does not allow
for variables... basically HTML, with custom tags (so, no variables allowed...).
Each variant represents a different type of question. Each question has three
mandatory parameters

```tsx
<Question
  variant="oneTwoDefinition"
  id="iP2fRJB3" // unique for each question
  lo="021.01.01.01.01" // can also be ana array for multiple lo's ['lo1', 'lo2']
/>
```

### One Two Definition

A question with two statements that can be either correct or incorrect.

```tsx
<Question variant="oneTwoDefinition" id="iP2fRJB3" lo="021.01.01.01.01">
  <Text>
    Which Of these Statements about <Subject /> are correct?
  </Text>
  <Option subject="Structural design principles" id="iP2fRJB3-1">
    Fail Safe implies multiple load Paths
  </Option>
  <Option subject="Structural design principles" id="iP2fRJB3-2">
    A safe life structure is based on use during a limited time period or number
    of cycles
  </Option>
  <Option id="iP2fRJB3-3">
    Fail Safe implies the structure will fail, when one component fails
  </Option>
  <Option id="iP2fRJB3-4">
    Safe life is the preferred design technique for aircraft
  </Option>
</Question>
```

Can be used to generate

```yml
Which Of these Statements is true regarding differential pressure ice accretion detector?
- Large holes freeze first
- Small holes melt first # CORRECT!
- large holes melt first
- It is based on the measurement of temperature and moisture
```

### One Correct

One question containing multiple possible correct answers, and incorrect
answers. At least 3 incorrect and 1 correct answer need to be included. Example:

```tsx
<Question
  variant="oneCorrect"
  id="gjpGbSOEfW"
  lo="021.07.02.01.01"
  explanation="#mechanical-systems-using-air-pressure"
>
  <Text>
    Which Of these Statements is true regarding differential pressure ice
    accretion detector?
  </Text>
  <Option id="gjpGbSOEfW-1">Large holes freeze first</Option>
  <Option id="gjpGbSOEfW-1" correct>
    Small holes freeze first
  </Option>
  <Option id="gjpGbSOEfW-1" correct>
    Small holes melt first
  </Option>
  <Option id="gjpGbSOEfW-1">Small holes are heated first</Option>
  <Option id="gjpGbSOEfW-1">
    Small and big holes are heated at the same time
  </Option>
  <Option id="gjpGbSOEfW-1" correct>
    An alarm light is activated in the cockpit when a pressure difference is
    measured between small and big apertures
  </Option>
  <Option id="gjpGbSOEfW-1">large holes melt first</Option>
  <Option id="gjpGbSOEfW-1">
    The torque of a rotating serrated shat is measured
  </Option>
  <Option id="gjpGbSOEfW-1">
    It is based on the measurement of temperature and moisture
  </Option>
</Question>
```

Could be used to generate

```yml
Which Of these Statements is true regarding differential pressure ice accretion detector?
- Large holes freeze first
- Small holes melt first # CORRECT!
- large holes melt first
- It is based on the measurement of temperature and moisture
```

### Calculation
