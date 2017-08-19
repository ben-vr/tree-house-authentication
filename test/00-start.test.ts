import * as CipherUtils from '../src/utils/cipher';

const user = {
  password: 'myPassword',
};

describe('Cipher helpers', () => {
  it('Hash the current password and compare', () => {
    const hashedPassword = CipherUtils.getHashedPassword(user.password);
    return expect(CipherUtils.comparePassword(user.password, hashedPassword)).toBe(true);
  });
});