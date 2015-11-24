#Simple Online Shop in AngularJS
---
- **Technologies**: AngularJS, Express, Node, Protractor, PhantomJS
- **Link**: [http://52.30.225.253:8081/](http://52.30.225.253:8081/)
- **GitHub**: [https://github.com/tomasz-potanski/shop-angular](https://github.com/tomasz-potanski/shop-angular)
- **Date**: November, 2015

Very simple online shop displaying data from json file, built with AngularJS. 

# Instalation

```
npm i
```

then

```
bower install
```

# Run application:
```
node server.js
```

Visit: [http://127.0.0.1:8081/](http://127.0.0.1:8081/)

# Tests
## E2E - protractor with Chrome and PhantomJS

Install protractor:

```
npm install -g protractor
```

Instal web-driver:

```
webdriver-manager update
```

Start web-driver:

```
webdriver-manager start
```

Install phantomJS:

```
npm install -g phantomjs
```

Run phantomJS:

```
phantomjs --webdriver=9515
```

Run tests: 

```
protractor protractor.conf.js
```

# Development
There is a gulp task that compiles *.scss styles to css and watches files.

```
gulp scss:watch
```

**Author: Tomasz Potanski, tomasz@potanski.pl**
