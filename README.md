![under construction](https://media.giphy.com/media/1XgIXQEzBu6ZWappVu/giphy.gif)

# JRG Material

This project is designed to create an extensible web component framework with 4 main goals...

1. Create a component pattern that doesn't is platform (Angular, React or Vue) agnostic. 
1. Provide versions of the application for all module loaders (CJS, ECMA, UMD).
1. Use the concept of convention over configuration and ensure as much as possible is ECMA Javascript, CSS3 and standard HTML.
1. Avoid use of _heavy_ (IMHO) Javascript compilation libraries like Webpack and Babel, in favor of Rollup.

## Current Components

These are the current Components, there will be more to come...

1. [Core](./packages/core): This is the basic shadow dom element
1. [Theme](./packages/theme): CSS that can be included on all components
1. [Button](./packages/components/packages/button): Simple Button (In progress)
1. [Icon](./packages/components/packages/icon): Inclusion of Material Icons (In progress) 
1. [Icon Button](./packages/components/packages/icon-button): (In progress)

## Getting started

### Using a component

For this example we will be using the button component. First install the component as follows...

    npm install --save @jrg-material/button
    
Make sure to include MustacheJS for templating and XState for state management (coming soon).

    <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/<version>/mustache.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/xstate@<version>/dist/xstate.web.js"></script>
    
Next we need to include the component JS file into our project. I typically do this like...

    <script type="module" src="/jrg/button/dist/index.mjs" />
    <!-- Older/Mobile Browsers -->
    <script nomodule src="/jrg/button/dist/index.umd.js" />
    
Next we need to use our component like this...

    <jrg-button 
      base-color="red" > 
        My Button
    </jrg-button>  

We should now see the button appear.    
    
### Creating a new component

Create a new project then install the base component (or the component you wish to extend) like this...

    npm install -D @jrg-material/build rollup rollup-plugin-commonjs rollup-plugin-node-resolve rollup-plugin-string 

Next create the component structure like this...

    component
      src
        index.mjs
        template.html
        style.css
      package.json
      rollup.config.json
      
Now in `index.mjs` we can create our web component...


    import template from './template.html';
    import style from './style.css';

    class MyComponent extends Base {
      constructor() {
        super();
        this.template = template;
        this.addStyle('main', style);
        this.render();
      }
    }
    Base.CREATE_ELEMENT(
      'jrg-my-component', 
      MyComponent
    );      
    
This is all we need now we can build like this...

    rollup -c
    
and install to npm with

    npm run upload

That is it, now we can install it in our app and start using the component.

### MustacheJS Templates

Both CSS and HTML supports [MustacheJs]() templates. I chose mustache because of its light footprint and ease of use. To use Mustache in your template simply wrap in curly braces like this...
   
    // JS
    class Thing{
      constructor(){
        this.isBold = !!this.getAttribute('bold');
        this.height = this.getAttribute('height') || "10px";
        this.text = this.getAttribute('text') || 'There was no text';
        ...
        this.render();
      }
    }
   
    <!-- Template -->
    <div class="{{#isBold}}{{bold}}{{/isBold}}">
      {{Text}}
    </div>  
    
    # CSS
    .thing{
      height: {{height}}
    }
    
This is extremely useful for Dynamic Template support.

### Slot Support

**TLDR** There is slot support on most components more to come.  

## More Information

For more information see the [Demo Project](./packages/demo) and to contact me check out [my site](https://jackiergleson.com).

