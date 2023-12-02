'use strict';

const studyEnrolment = require('..');
const assert = require('assert').strict;

assert.strictEqual(studyEnrolment(), 'Hello from studyEnrolment');
console.info('studyEnrolment tests passed');
