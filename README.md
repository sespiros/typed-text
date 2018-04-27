# &lt;typed-text&gt;

Polymer 2.0 element that simulates typing similar to [typed.js](https://github.com/mattboldt/typed.js/) for jQuery.

Check out the [demo and full documentation](https://www.webcomponents.org/element/sespiros/typed-text)

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="typed-text.html">
    <link rel="import" href="demo/app-theme.html">
    <typed-text cursor="▍" noretype loop strings='[
      "Polymer is awesome",
      "Polymer is easy",
      "Polymer rocks!",
      "<typed-text> element rocks too!"
    ]'></typed-text>
  </template>
</custom-element-demo>
```
-->

## TODO
- [x] make looping & blinking the default behaviour
- [ ] add `random` to options to allow any string to be typed
- [ ] pause typing in the middle of a string whenever a `^` character is seen
- [ ] create demos

## Install
```bash
bower install --save sespiros/typed-text
```
Install with bower or [download the zip](https://github.com/sespiros/typed-text/archive/v1.0.0.zip)

## Import
```html
<link rel="import" href="/bower_components/typed-text/typed-text.html">
```

## Usage
```html
<typed-text options></typed-text>
```
where `options` can be any of:
* `strings`: an array of strings to be typed one after the other i.e. `["Hello world!", "typed-text is awesome"]`
* `cursor`: specify a cursor string. `|` by default
* `noretype`: only backspaces to erase the part of the string that is different
* `noloop`: stops typing after the last string
* `noblink`: stops the cursor from blinking

## Features
- Can **type** and **delete** text
- Supports constant **looping** between text
- Cursor **blinking** and customization with custom-style
- Smart **noretype** to keep common parts of consecutive strings
- Style it however you want for cool effects!

## Contribute
Feel free to extend it or propose new functionality
