const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
});
    // it('throws an error', () => {
    //     throw new Error('This test shall fail');
    //   });

    it('Returns an error if string length is less than maxLen', () => {
      expect(wrap('abcvderesp', 10)).to.equal('');
    });
