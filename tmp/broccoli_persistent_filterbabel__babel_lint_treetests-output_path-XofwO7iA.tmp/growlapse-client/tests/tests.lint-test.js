define('growlapse-client/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/timelapses-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/timelapses-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/timelapses-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/timelapses-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/timelapses-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/timelapses-test.js should pass ESLint\n\n');
  });
});