# expand-object-keys [![Build Status](https://travis-ci.org/stoeffel/expand-object-keys.svg?branch=master)](https://travis-ci.org/stoeffel/expand-object-keys)

> Expand dotty object keys to objects


## Install

```
$ npm install --save expand-object-keys
```


## Usage

```js
import expandObjectKeys from 'expand-object-keys';


const obj = {
  'profile.name': 'myname',
  'profile.email': 'myname@gmail.com',
  'profile.address.street': 'Home address',
  'profile.address.zip': '1234',
  mac: 'some mac',
  dist: 'fedora 22'
};

const newObj = expandObjectKeys(obj);

console.log(newObj); // =>
                     // {
                     //   profile: {
                     //     name: 'myname',
                     //     email: 'myname@gmail.com',
                     //     address: {
                     //       street: 'Home address',
                     //       zip: '1234'
                     //     },
                     //   },
                     //   mac: 'some mac',
                     //   dist: 'fedora 22'
                     // };
```




## License

MIT © [Stoeffel](http://stoeffel.github.io)
