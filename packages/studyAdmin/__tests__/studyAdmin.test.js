'use strict';

const studyAdmin = require('..');
const assert = require('assert').strict;

assert.strictEqual(studyAdmin(), 'Hello from studyAdmin');
console.info('studyAdmin tests passed');
