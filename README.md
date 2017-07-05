# [heilbaum-ionic-object-fit-images](#heilbaum-ionic-object-fit-images)
Ionic 2 directive to provide an object-fit CSS polyfill using 
[object-fit-images](https://www.npmjs.com/package/object-fit-images).

## [Installation](#installation)
1. Install via npm: `npm install heilbaum-ionic-object-fit-images --save`
2. Add `ObjectFitImagesModule` to `src/app/app.modules.ts`
    ```typescript
    @NgModule({
       imports: [
           ObjectFitImagesModule
       ]
    })
    ```

## [Usage](#usage)
Add directive attribute to image tag  
```html
<img alt="alternative" 
     src="path/to/image.jpg" 
     object-fit="cover"
     object-fit-watch-mq="true"
     object-position="50% 50%"
     title="title" />
```

## [Directives](#directives)
heilbaum-ionic-object-fit-images provides three new directives.
- [object-fit](#object-fit)
- [object-fit-watch-mq](#object-fit-watch-mq)
- [object-position](#object-position)

### [object-fit](#object-fit)
Available attribute values:
- `fill` (default)
- `contain`
- `cover`
- `none`
- `scale-down`

Example: [http://bfred-it.github.io/object-fit-images/demo/](http://bfred-it.github.io/object-fit-images/demo/)

### [object-fit-watch-mq](#object-fit-watch-mq)
Add attribute `object-fit-watch-mq="true"` to img-tag if
- you are using `scale-down` or
- your media queries change the value of object-fit, like this
    ```css
                                img { object-fit: cover }
    @media (max-width: 500px) { img { object-fit: contain } }
    ```

### [object-position](#object-position)
Attribute value is a [<position>](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value), that is one to four 
values representing a 2D position regarding the edges of the element's box. Relative or absolute offsets can be given.
Note that the position can be set outside of the element's box.  
For more information read the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position).

### License
MIT License

Copyright (c) 2016-2017 Jonathan Heilmann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.