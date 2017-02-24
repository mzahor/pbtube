import common from '../common';

describe('humanizeNumber filter', function() {
  let humanizeNumber;

  beforeEach(window.module(common));
  beforeEach(inject(($filter) => {
    humanizeNumber = $filter('humanizeNumber');
  }));

  it('should leave numbers less than 1000 as they are', function() {
    const i = 1;
    const humanized = humanizeNumber(1);
    expect(humanized).to.equal('1');
  });
});
