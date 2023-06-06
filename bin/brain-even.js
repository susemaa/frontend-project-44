#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { startGame, sayBye } from '../src/games-functions.js';

const playerName = getName();

const counter = startGame('even');

sayBye(counter, playerName);