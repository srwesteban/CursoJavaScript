import {suma, multiplicar}from './controllers.js'

import chalk from 'chalk';

const log = console.log;

const sum = suma(1,2)
console.log(sum)

const sum2 = suma(4,5)
console.log(sum2)

const mult = multiplicar(sum,sum2)
console.log(chalk.green(mult))
