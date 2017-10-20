# siglike

> siglike Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3333 (you can change localhost in scrips inside package.json file)
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Information about development
* For inlining icons in html markup need to add svg icon to `static` folder. Also, need to add code of svg to `components/Icon.vue` to `icons` object.
  
  Use of this component:<br>
    * Make 'import' to template<br>
    * `<Icon name='some_name'></Icon>`, where `name` – name of svg icon in `icons` object
