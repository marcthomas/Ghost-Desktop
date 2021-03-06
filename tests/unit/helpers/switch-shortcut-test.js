import {switchShortcut} from 'ghost-desktop/helpers/switch-shortcut';
import {module, test} from 'qunit';

module('Unit | Helper | switch shortcut');

test('starts at 1 for 0', function(assert) {
    const result = switchShortcut([0]);
    const ok = result.includes('1');

    assert.ok(ok);
});

test('does not return anything for indexes larger than 8', function(assert) {
    const result = switchShortcut([9]);

    assert.equal(result, '');
});
