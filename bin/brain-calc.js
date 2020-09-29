#!/usr/bin/env node

import { calcQuestion, gameTask } from '../src/games/calc.js';

import brainAPI from '../src/index.js';

brainAPI(calcQuestion, gameTask);
