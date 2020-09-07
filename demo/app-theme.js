const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<style is="custom-style">
  typed-text {
    --typed-text-cursor: {
      opacity: 0.6;
    };

    --typed-text-cursor-blink: {
      -webkit-animation: 2s blink step-end infinite;
      -moz-animation: 2s blink step-end infinite;
      -ms-animation: 2s blink step-end infinite;
      -o-animation: 2s blink step-end infinite;
      animation: 2s blink step-end infinite;
    }

    --typed-text-cursor-blink-0: {
      opacity: 0.6;
      color: blue;
    };

    --typed-text-cursor-blink-50: {
      opacity: 0;
    };

    --typed-text-cursor-blink-100: {
      opacity: 1;
      color: red;
    };
  }
</style>`;

document.head.appendChild($_documentContainer.content);

/* Blinking cursor effect from typed.js */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
