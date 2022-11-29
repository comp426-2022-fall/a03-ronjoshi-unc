#!/usr/bin/env node

// import function created in other folder
import Roll from "../lib/roll.js";
// import minimist to process argv
import minimist from "minimist";

// get CLI argv and process them
const args = minimist(process.argv.slice(2));

// print output
console.log(JSON.stringify(Roll(args.sides, args.dice, args.rolls)));

/*#!/usr/bin/env node
import Roll from "../lib/roll.js";
import minimist from 'minimist';
const args = minimist(process.argv.slice(2));

const sides = args.sides;
const dice = args.dice;
const rolls = args.rolls;

console.log(JSON.stringify(Roll(sides, dice, rolls)));*/