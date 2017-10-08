# Shuffle
Implements the Fischer-Yates shuffle algorithm in order to ensure maximally randomized array elements.

## Usage
```
var shuffle = require('shuffle');

var arr = shuffle([1,2,3,4,5,6,7,8,9,10]);
```

The function returned will make a shallow copy of the array passed into it before randomizing its order.

The function can easily be added to the Array constructor's prototype, providing a shuffle function in all arrays.
```
var shuffle = require('shuffle');
Array.prototype.shuffle = shuffle;

var arr = [1,2,3,4,5,6,7,8,9,10];
arr.shuffle();
```

When used in this manner, the array is randomized in-place and a copy is *not* made.


## Testing
Tests are written in mocha and may require this library be installed.

ex:

```sh
sudo npm install -g mocha
```

Otherwise, ```npm run test ``` will execute the tests.

## License
 
The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
