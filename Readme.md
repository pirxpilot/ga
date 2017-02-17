
# ga

  Google Analytics tracking snippet
  You might want to use [pirxpilot/google-ua] instead - it supports new Google Universal Analytics snippet.

## Installation

    $ npm install @pirxpilot/ga

## API

  Activate Google Analytics on the page and track page

    require('ga')("UA-XXXX-X");

  Alternatively you can define GA property ID as a data attribute of document body

  	<body data-ga-property-id="UA-XXXX-X">

  Check [test/index.html](https://github.com/pirxpilot/ga/blob/master/test/index.html) for example.

## License

  MIT

[pirxpilot/google-ua]: https://github.com/pirxpilot/google-ua
