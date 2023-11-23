import data from './data.js';
import { bigPopulation, lowPopulation } from './filter.js';

console.log('over 100000: ', bigPopulation(data));
console.log('########################################################################');
console.log('under 100000: ', lowPopulation(data));
