const Bart = {
  // spanish translation is "multiplicate por cero" or multiply by zero then this method returns
  // the result to multiple any value by zero
  eatMyShorts: (value, cb) => {
    const errorMessage = 'Eat my shorts dude!! You have to pass me a number!';

    if (typeof cb === 'function') {
      if (typeof value !== 'number') {
        return cb(errorMessage);
      }

      return cb(null, value * 0);
    }

    return new Promise((resolve, reject) => {
      if (typeof value !== 'number') {
        return reject(errorMessage);
      }

      return resolve(value * 0);
    });
  }
};

module.exports = Bart;
