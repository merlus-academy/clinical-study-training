'use strict';

const studyAPI = require('..');
const assert = require('assert').strict;

assert.strictEqual(studyAPI(), 'Hello from studyAPI');
console.info('studyAPI tests passed');
