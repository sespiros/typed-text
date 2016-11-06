# &lt;typed-text&gt;

Polymer 1.4 element that simulates typing similar to [typed.js](https://github.com/mattboldt/typed.js/) for jQuery.

Check out the [demo and full documentation](https://beta.webcomponents.org/element/sespiros/typed-text)

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

## Setup
Install with bower or [download the zip](https://github.com/sespiros/typed-text/archive/v1.0.0.zip)
```bash
bower install --save sespiros/typed-text
```
Import it in your code
```html
<!-- for relative paths -->
<link rel="import"href="../bower_components/typed-text/typed-text.html">
```

## Usage
```html
<typed-text></typed-text>
```

## Features
- Can **type** and **delete** text
- Supports constant **looping** between text
- Cursor customization with custom-style
- Smart **noretype** function that finds common parts of consecutive strings as shown in the [demo](http://sespiros.github.io/typed-text/)
- Style it however you want for cool effects!

## Contribute
Feel free to extend it or propose new functionality
