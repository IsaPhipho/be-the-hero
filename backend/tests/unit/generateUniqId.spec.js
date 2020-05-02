const generateUniqId = require('../../src/utils/generateUniqId');

describe('Generate Unique Id', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqId();

    expect(id).toHaveLength(8);
  });
});