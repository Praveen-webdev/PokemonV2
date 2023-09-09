import getData from 'pokemon/utils/get-data';
import { module, test } from 'qunit';

module('Unit | Utility | getData', function () {
  // TODO: Replace this with your real tests.
  test('it works', function (assert) {
    let result = getData();
    assert.ok(result);
  });
});
