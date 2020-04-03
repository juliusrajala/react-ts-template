# React Typescript Template

This is a somewhat opinionated starter kit for a React Application using Typescript.

I'm a big fan of [Create React App](https://github.com/facebook/create-react-app) and for the most part, would still recommend using CRA to get started with most of your react-application needs.

What this starter template aims to provide is a lightweight alternative without all the bells and whistles attached.

## Usage

Relatively simple usage. The package comes with a few npm scripts to get you started quickly.

### Development

Development is simple. Install dependencies, run `npm start`.

```
$ npm i
$ npm start
```

### Code style

Prettier is used to format code to keep format discussions to a minimum.

Component-files should contain a components props equivalent interface.

### Deployment

After building the app, you can basically utilize any simple http-server to host its contents, or maybe simply drop it into an s3-bucket on amazon.

There's a pre installed dev http-server you might also wish to use.

```
$ npm serve
```

## License

MIT, 2020 Julius Rajala
