import common from '../common';

describe('humanizeNumber filter', function() {
  let humanizeNumber;

  beforeEach(window.module(common));
  beforeEach(inject(($filter) => {
    humanizeNumber = $filter('humanizeNumber');
  }));

  it('should leave numbers less than 1000 as they are', function() {
    expect(humanizeNumber(1)).to.equal('1');
    expect(humanizeNumber(10)).to.equal('10');
    expect(humanizeNumber(123)).to.equal('123');
    expect(humanizeNumber(999)).to.equal('999');
  });

  it('should should display numbers between 1000 and 999500 with K suffix (like 1.2K, or 10.3K)', function() {
    expect(humanizeNumber(1000)).to.equal('1K');
    expect(humanizeNumber(1010)).to.equal('1K');
    expect(humanizeNumber(1100)).to.equal('1.1K');
    expect(humanizeNumber(999450)).to.equal('999.5K');
  });

  it('should display numbers bigger than 999500 with M suffix', function() {
    expect(humanizeNumber(999999)).to.equal('1M');
    expect(humanizeNumber(1999999)).to.equal('2M');
    expect(humanizeNumber(2399999)).to.equal('2.4M');
    expect(humanizeNumber(24399999)).to.equal('24.4M');
  });
});
