function customPow(num, degree) {
    if (typeof num !== 'number' || typeof degree !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    if (!Number.isInteger(degree)) {
      throw new Error('Both arguments must be integers');
    }
    if (degree === 0) {
      return 1;
    } else if (degree > 0) {
      return num * customPow(num, degree - 1);
    } else {
      return 1 / customPow(num, -degree);
    }
  }
  
  module.exports = { customPow };
  