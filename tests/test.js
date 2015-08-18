import assert from 'assert';
import { expandObjectKeys } from '../module';

describe('expandObjectKeys', () => {
	it('should Expand dotty object keys to objects', () => {

    const obj = {
      'profile.name': 'myname',
      'profile.email': 'myname@gmail.com',
      'profile.address.street': 'Home address',
      'profile.address.zip': '1234',
      mac: 'some mac',
      dist: 'fedora 22'
    };

    const expected = {
      profile: {
        name: 'myname',
        email: 'myname@gmail.com',
        address: {
          street: 'Home address',
          zip: '1234'
        },
      },
      mac: 'some mac',
      dist: 'fedora 22'
    };

		assert.deepEqual(expandObjectKeys(obj), expected);
		assert.deepEqual(expandObjectKeys({}), {});
    assert.throws(() => expandObjectKeys(undefined));
    assert.throws(() => expandObjectKeys(null));
	});
});
