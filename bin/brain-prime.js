#!/usr/bin/env node

import { primeQuestion, gameTask } from '../src/games/prime.js';

import brainAPI from '../src/index.js';

brainAPI(primeQuestion, gameTask);
