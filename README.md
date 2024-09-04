tsimmes [![npm version](https://badge.fury.io/js/tsimmes.svg)](https://badge.fury.io/js/tsimmes)
============

<!-- <p align="center">
<img src="https://github.com/finom/tsimmes/assets/1082083/ec10294f-9b8b-4af1-9f66-a5694bacdfb5" width="450">
</p> -->

### A function for elements selection in 389 byte compressed, 685 ASCII chars uncompressed!

**tsimmes** is a function that allows you to select elements on a web page. Think of it as of `document.querySelectorAll` on steroids with a little bit of jQuery like stuff.

```js
const buttons = $('.button');
```

You can use it as a global variable

```html
<script>
$=((a,b,c)=>(c=(d,e,f=[])=>(d&&f.push(...(d.dispatchEvent?[d]:""+d===d?/</.test(d)?((e=a.createElement(e)).innerHTML=d,e.children):e?(e=c(e)[0])?e[b](d):f:a[b](d):d)),f),c.one=(a,b)=>c(a,b)[0],c))(document,"querySelectorAll");
</script>
```


*If you don't want to use ``$`` variable just rename it.*
```js
foo=...
// instead of
$=...
```

And you can use it as a local variable in a script you make

```js
((win, $) => {
    // your code starts here
    const divs = $('div');
    console.log(divs);
    // your code ends here
})(window, ((a,b,c)=>(c=(d,e,f=[])=>(d&&f.push(...(d.dispatchEvent?[d]:""+d===d?/</.test(d)?((e=a.createElement(e)).innerHTML=d,e.children):e?(e=c(e)[0])?e[b](d):f:a[b](d):d)),f),c.one=(a,b)=>c(a,b)[0],c))(document,"querySelectorAll"));
```

The function is also published on NPM

```
npm install tsimmes
```


**tsimmes** is inherited from ``Array.prototype`` which means it has the same set of methods as the native array has.

<ul>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" target="_blank">concat</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">join</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" target="_blank">pop</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">push</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" target="_blank">reverse</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank">shift</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank">slice</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">sort</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" target="_blank">splice</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString"  target="_blank">toString</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" target="_blank">unshift</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" target="_blank">every</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">filter</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank">forEach</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" target="_blank">lastIndexOf</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">map</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" target="_blank">some</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" target="_blank">copyWithin</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" target="_blank">entries</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" target="_blank">fill</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank">find</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" target="_blank">findIndex</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" target="_blank">includes</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys" target="_blank">keys</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values" target="_blank">values</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/%40%40iterator" target="_blank">[Symbol.iterator]</a></li>
</ul>

## More features?

### Various types support

**tsimmes** accepts many kinds of first argument and converts everything into array

```js
$('.one, #two')
$(document.querySelectorAll('.selector'));
$(document.body);
$(element.children);
$(jQuery('.selector'));
$([document.querySelector('.one'), document.querySelector('.two')])
```

That means when you make your own library (VanillaJS "plugin") you can use **tsimmes** in case if you don't know which arg type will be passed by a programmer.

```js
const myCoolLibrary = (el) => {
  el = $(el);
  // ...
};
```

### $.o

Getting zero-indexed element in DOM libraries is annoying. **tsimmes** has one little static method called ``$.o`` which selects only one element.

```js
$.o('.button');
//vs
$('.button')[0];
```
This function is also created to get rid of extra variables (usually DOM libraries make two vars: ``$$`` and ``$``). It means you can import **tsimmes** nicely via module system.


### $().c

Usual set css properties directly for each selected element, like this:

```js
$('.button').c({background: red});
```

### $().cls

Query class list, add, remove or toggle a class for each selected element, like this:

```js
bool hasClassC = $('.button').cls('c');
// Toggle class C
$('.button').cls('c', -1);
// Set class C
$('.button').cls('c', 1); // Or true
// Remove class C
$('.button').cls('c', 0); // Or false
```

### $().on / .off

Add/Remove event listener for each selected element, like this:
```js
let preventNavigatingAway = e => e.preventDefault();
$('a').on('click', preventNavigatingAway);
$('a').off('click', preventNavigatingAway);
```

### $().insert

Insert element in each selected element
```js
$('div').insert('<a>something</a>'); // Insert a link at the end of every div
$('div').insert('<a>something</a>', -1); // Insert a link before the first child of every div
```

### $().remove

Remove all selected element from DOM
```js
$('div').remove();
```

### $().p

Get or set any property for the selected elements.
```js
$('input[type=text]').p('value'); // Return an array of all el.value
$('div').p('innerHTML', '<p>Hello world</p>'); // Replace the content of all div with a paragraph containing "Hello world"
$('div').p('innerText'); // Get an array of the inner text of all div
$('div').p('textContent', ''); // Empty all div
```

Example usage for serializing a form to url encoded value
```js
let inputs = $('input');
let i = { v: inputs.p('value'), n: inputs.p('name') };
let ser = i.n.reduce((a,e,k)=>[...a,encodeURIComponent(e)+'='+encodeURIComponent(i.v[k])],[]).join('&')
```
Or, even shorter:
```js
$('input').map(i=>encodeURIComponent(i.name)+'='+encodeURIComponent(i.value)).join('&')
```


**AMD**
```js
require(['path/to/tsimmes/umd/tsimmes.umd.js'], ($) => {
	// ...
});
```

**CommonJS**
```js
const $ = require('path/to/tsimmes/tsimmes.umd.js');
```

**CommonJS + NPM**
```js
const $ = require('tsimmes');
```

**ECMAScript 2015**
```js
import $ from 'tsimmes';
```

### Find elements inside another element
```js
const elements = $('.my-selector', someParent);
// or
const element = $.o('.my-selector', someParent);
```


### Parse HTML
Simple parsing.
```js
const div = $('<div><span class="yeah"></span></div>');
```

### Contextual HTML parsing
In case if you need to parse HTML which contains contextual elements (``td``, ``tr``, ``option``) you can pass a context tag name as a second argument.
```js
const cells = $('<td>foo</td><td>bar</td>', 'tr')
```

## I need more examples!

### Add style
```js
for(let element of $('.my-selector')) {
    element.style.color = 'red';
}
```

In case if you need to set style only for one element you can use ``$.o``.

```js
$.o('.my-selector').style.color = 'red';
```

### Events delegation

```js
$('.my-selector').on(e => this.contains(e.target.closest('.delegated-selector')) && alert('yep'));
```
Or
```js
for(let element of $('.my-selector')) {
    element.addEventListener('click', function ({ target }) {
        if (this.contains(target.closest('.delegated-selector'))) {
            alert('yep!');
        }
    });
}
```
Or
```js
$.o('.my-selector').addEventListener('click', function ({ target }) {
    if (this.contains(target.closest('.delegated-selector'))) {
        alert('yep!');
    }
});
```


### Elements removal
```js
$('.my-selector').remove()
```
Or
```js
for(let element of $('.my-selector')) {
    element.remove();
}
```
Or
```js
$.o('.my-selector').remove();
```

### Sub element usage

If you need to use some method on only some elements from the selected list:
```js
$($('div')[3]).c({background: red})
$($('input[type=checkbox]')[2]).p('checked', true)
$($('ul li.active').slice(3, 6)).cls('active', 0)
```


### Animations
Use [element.animate](https://developers.google.com/web/updates/2014/05/Web-Animations-element.animate-is-now-in-Chrome-36) for smooth GPU-accelerated animations. You may need [polyfill for Web Animations API](https://github.com/web-animations/web-animations-js).
```js
$.o('.my-selector').animate({
    opacity: [0.5, 1],
    transform: ['scale(0.5)', 'scale(1)'],
}, {
    direction: 'alternate',
    duration: 500,
    iterations: Infinity,
});
```

Do you still need jQuery?
