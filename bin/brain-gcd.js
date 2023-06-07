#!/usr/bin/env node
import getName from '../src/cli.js';
import { sayBye, startGame } from '../src/games-functions.js';

const playerName = getName();

const counter = startGame('gcd');

sayBye(counter, playerName);
