#!/usr/bin/env node

import { gcdQuestion, gameTask } from '../src/games/gcd.js';

import brainAPI from '../src/index.js';

brainAPI(gcdQuestion, gameTask);
