import {formatCurrency} from '../../scripts/utils/money.js';

console.log('test suite: format currency');
const basicTest = (formatCurrency(2095) === '20.95') ? 'passed' : 'failed';
console.log('basic test: ' + basicTest);

const testWith0 = (formatCurrency(0) === '0.00') ? 'passed' : 'failed' ;
console.log('test with 0: ' + testWith0);

const testWithoutDecimals = (formatCurrency(295) === '2.95') ? 'passed' : 'failed' ;
console.log('testWithoutDecimals: ' + testWithoutDecimals);

const roundsUpToTheNearestCent = (formatCurrency(2000.5) === '20.01') ? 'passed' : 'failed' ;
console.log('testWith2000_5: ' + roundsUpToTheNearestCent);

const testWith2000_4 = (formatCurrency(2000.4) === '20.00') ? 'passed' : 'failed' ;
console.log('testWith2000_4: ' + testWith2000_4);
