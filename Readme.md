
# ga

  Google Analytics tracking snippet
  You might want to use [code42day/ua] instead - it supports new Google Universal Analytics snipper.

## Installation

    $ component install code42day/ga

## API

  Activate Google Analytics on the page and track page

    require('ga')("UA-XXXX-X");

  Alternatively you can define GA property ID as a data attribute of document body

  	<body data-ga-property-id="UA-XXXX-X">

  Check [test/index.html](https://github.com/code42day/ga/blob/master/test/index.html) for example.

## License

  MIT

[code42day/ua]: https://github.com/code42day/ua
