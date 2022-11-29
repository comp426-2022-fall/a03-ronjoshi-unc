#!/usr/bin/env node
import Roll from "../lib/roll.js";
import minimist from 'minimist';
const args = minimist(process.argv.slice(2))

const sides = args.sides;
const dice = args.dice;
const rolls = args.rolls;

console.log(JSON.stringify(Roll(sides, dice, rolls)));