#!/usr/bin/env node

import { progressionQuestion, gameTask } from '../src/games/progression.js';

import brainAPI from '../src/index.js';

brainAPI(progressionQuestion, gameTask);
