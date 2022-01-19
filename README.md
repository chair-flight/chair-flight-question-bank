# Chair Flight Question Bank

An Open source aviation question bank. **Still in (super early) development ;)**

## Contributing

All content contributions are more than welcome. Content is written using [MDX](https://mdxjs.com/), which is
a superset of [Markdown](https://en.wikipedia.org/wiki/Markdown). All boilerplate is already put in place, so if you
want to write some content, or add questions... go ahead!

## Using it

This package is distributed [via NPM](https://www.npmjs.com/package/chair-flight-question-bank). The distribution
includes all MDX files, under `lib/content`, a json export with metadata of all the content, and the same metadata
export as a `JS`/`TS` friendly package.

If you want to use the `MDX` you will have to provide your own components to render the questions.

## Question variants

Questions are always written in a very limited subset of JSX that does not allow for variables... basically HTML, with
custom tags (so, no variables allowed...). Each variant represents a different type of question.

### One Correct

The simples question format, One question containing multiple possible correct answers, and incorrect answers. At least
3 incorrect and 1 correct answer need to be included. Example:

```xml
<Question variant="oneCorrect" id="gjpGbSOEfW" lo="021.07.02.01.01" explanation="#mechanical-systems-using-air-pressure">
  <Text>
    Which Of these Statements is true regarding differential pressure ice accretion detector?
  </Text>
  <Option id="gjpGbSOEfW-1">
      Large holes freeze first
   </Option>
   <Option id="gjpGbSOEfW-1" correct>
      Small holes freeze first
   </Option>
    <Option id="gjpGbSOEfW-1" correct>
      Small holes melt first
   </Option>
       <Option id="gjpGbSOEfW-1">
      Small holes are heated first
   </Option>
    <Option id="gjpGbSOEfW-1">
      Small and big holes are heated at the same time
   </Option>
    <Option id="gjpGbSOEfW-1" correct>
      An alarm light is activated in the cockpit when a pressure difference is measured between small and big apertures
   </Option>
    <Option id="gjpGbSOEfW-1">
      large holes melt first
   </Option>
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
