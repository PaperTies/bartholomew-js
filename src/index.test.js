const Bart = require('.');

// Because tests are import for use, we test all funcionalities of bart-js library, our goal: 100% coverage always!!!!
describe('Bart testing', () => {
  describe('eatMyShorts method', () => {
    const eatMyShortsErr = 'Eat my shorts dude!! You have to pass me a number!';

    test('should return the right value, 0', () => {
      Bart.eatMyShorts(1231778278917387213, (err, val) => {
        expect(val).toBe(0);
      });
    });

    test('should return an error when you dont pass a number', () => {
      Bart.eatMyShorts('fuck off!', (err, val) => {
        expect(err).toBe(eatMyShortsErr);
      });
    });

    test('should return a promise with the right value 0', () => {
      Bart.eatMyShorts(3123412).then(value => expect(val).toBe(0));
    });

    test('should return a promise with an error when you dont pass a number', () => {
      Bart.eatMyShorts({ id: 'oh yeah!' }).catch(value =>
        expect(val).toBe(eatMyShortsErr)
      );
    });
  });
});
