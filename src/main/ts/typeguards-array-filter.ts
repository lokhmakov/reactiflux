export {};

const a: Array<number | string> = [1, 2, 3, '4', '5', '6'];

const isNumber = (v: any): v is number => typeof v === 'number';
const isString = (v: any): v is string => typeof v === 'string';

const numbers = a.filter(isNumber);
const strings = a.filter(isString);

console.log(numbers);
console.log(strings);
