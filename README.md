[![LICENSE](https://img.shields.io/github/license/halodong/web-barrier-free?style=flat-square)](./LICENSE) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/halodong/web-barrier-free) [![NPM Version](https://img.shields.io/npm/v/wbf.svg)][npm-url] [![Build Status](https://app.travis-ci.com/halodong/web-barrier-free.svg?branch=master)](https://www.travis-ci.com) [![codecov](https://codecov.io/gh/halodong/web-barrier-free/branch/master/graph/badge.svg?token=VUFO08431V)](https://codecov.io/gh/halodong/web-barrier-free)

[npm-url]: https://npmjs.org/package/wbf

# web-barrier-free

A JavaScript library that can help you quickly add accessible reading modes. Based on `SpeechSynthesis` API implementation.

[简体中文](./README-cn.md)

## Install

**Note: In version 2.0, the package name was changed to wbf**

Use npm

```
$ npm install wbf
```

or yarn

```
$ yarn add wbf
```

**demo:**

- [en-demo](https://codesandbox.io/s/loving-pasteur-ui8n0q)
- [zh-CN-demo](https://halodong.github.io/)

## Use

**Example:**

Wbf adopts the singleton design pattern, and it is recommended to use getInstance to create and obtain instances.

```js
const options = {
  language: 'en',
  rate: 1,
  pitch: 1,
  readMode: 'finger'
}
const instance = Wbf.getInstance(options)
openBtn.addEventListener('click', () => {
  instance.open()
})
```

**Options:**

### opening

A boolean value indicating whether the current state is on. defaults：false.

### readMode

```ts
type readMode = 'finger' | 'continuous'
```

continuous: Continuous reading `document.body.innerText`. finger: Point to read, read the text of the element pointed by the mouse, the `img` tag will read the text of the `alt` attribute.

defaults：'finger'.

### language

```ts
type language = 'en' | 'zh-CN'
```

Use language, the default value is'zh-CN'.

### rate

Speaking rate, range 0.1 (lowest) ~ 10 (highest), default value: 1.

### pitch

Intonation, range 0 (lowest) ~ 2 (highest), default value: 1.

### volume

Volume, range 0 (lowest) and 1 (highest), default value: 1.

### externalFn

You can provide an external reading text method `externalFn` instead of using the playAudio method provided by `class Wbf`.

### needConsole

Whether the default console element is required, the default value is `true`.

## Main JavaScript API

### open

open Wbf's function.

```typescript
open (): void;
```

### close

close Wbf's function.

```typescript
close (): void;
```

### changeOptions

The function of modifying the Wbf attribute cannot modify the non-existing attribute and the `opening` attribute.

```typescript
changeOptions (keyName: string, value): void;
```

### changeMode

A function to modify the Wbf reading mode.

```typescript
type readMode = 'finger' | 'continuous';
changeMode (readMode: readMode): void;
```

### playAudio

A function to read a string.

```typescript
playAudio (str: string): SpeechSynthesisUtterance | undefined
```

## Compatibility

See for details [MDN SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis#browser_compatibility)

## Problem

For bugs or suggestions, you can submit via [create an issue](https://github.com/halodong/web-barrier-free/issues/new). © 2021 GitHub, Inc.
