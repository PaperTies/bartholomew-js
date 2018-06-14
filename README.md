# Bart JS

Library with basic Bart functionalities.

## Installation

With npm:

```
npm install bart-js
```

With yarn:

```
yarn add bart-js
```

## API

#### eatMyShorts

You can pass any value and returns it multiply by 0!!

#### Params

- `value: number`
- `callback: Function(err: string, value: number)`
- `returns: Promise`

#### Callback Example

```js
const Bart = require('bart-js');

Bart.eatMyShorts(1231778278917387213, (err, val) => {
  if (err) {
    throw Error(err);
  }

  console.log(err); // 0
});
```

#### Promise Example

```js
const Bart = require('bart-js');

Bart.eatMyShorts(1231778278917387213)
  .then(value => console.log(value) // 0)
  .catch(err => console.log(err) // show an error!)
```

## Contribute

Contributions to the package are always welcome!

- Report any bugs or issues you find on the [issue tracker](https://github.com/PaperTies/bart-js/issues/new).
- You can grab the source code at the package's [Git repository](https://github.com/PaperTies/bart-js.git).

## Support

Get in touch with me using one of the following means:

- Emailing us at <mailto:papertiesteam@gmail.com>

## Authors

- Paperties Team
- [The Community Contributors](https://github.com/PaperTies/bart-js/graphs/contributors)

## License

The code base is licensed under the [MIT license](LICENSE).
