#!/usr/bin/env node

import { evenQuestion, gameTask } from '../src/games/even.js';

import brainAPI from '../src/index.js';

brainAPI(evenQuestion, gameTask);
