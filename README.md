sheeldotme-aba
================================

[![build status](https://api.travis-ci.org/sheeldotme/sheeldotme-aba.svg)](https://travis-ci.org/sheeldotme/sheeldotme-aba)

Install
=======
```bash
  npm install sheeldotme-aba
```

Usage
=====
```javascript
  var base62 = require('sheeldotme-aba');
  base62.toDecimal('1aA');
  base62.fromDecimal(100);
```

Handling Errors
===============

If the value passed to aba is not appropriate, it returns null.

```javascript
  var result = base62.toDecimal('1aA');
  console.log(result); // 6086
  
  var result = base62.toDecimal('1aA!');
  console.log(result); // null
```

Test for a successful result by making sure the response is not null

```javascript
  var result = base62.toDecimal('1aA');
  if(result !== null) {
    console.log(result); // 6086
  }
```

Contribute
==========

You can find the repository at https://github.com/sheeldotme/sheeldotme-aba.
Find a bug? Create an issue at https://github.com/sheeldotme/sheeldotme-aba/issues

If you have any questions/feedback feel free to reach out to me on twitter [@sheeldotme](http://twitter.com/sheeldotme)