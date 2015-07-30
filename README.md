# REXpress

RExpress is an enhancement to the pretty awesome express generator written by TJ Holowaychuk, Doug Wilson and all of the contributors to the original version. RExpress includes [additional functionality](functionality.md) to get you from 0 to productive even quicker. 

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

An enhanced [Express](https://www.npmjs.com/package/express) application generator.

## Installation

```sh

$ npm install -g rexpress

```

## Quick Start

The quickest way to get started with RExpress is to utilize the executable `rexpress` to generate an application as shown below:

Create the app:

```bash

$ rexpress appName && cd appName

```

RExpress installs dependencies for you. But, if you'd like, feel free to install or update

```bash

$ npm install OR npm update

```

Rock and Roll

```bash

$ npm start

```

## Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to handlebars)
        --hbs           add handlebars engine support
    -H, --hogan         add hogan.js engine support
    -j, --jade          add jade engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
    -M, --mongoose      add mongoose support (overrides all other database options)
    -m, --monk          add monk support
    -a, --auth          add authentication support (Uses Passport)
    -C, --cors          add CORS support
        --git           add .gitignore        

## License

[MIT](LICENSE)