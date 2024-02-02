#!/usr/bin/env node
/*!
 * Copyright (c) 2021-2024 Digital Bazaar, Inc. All rights reserved.
 */
import * as ctx from '../js/index.js';
import {fileURLToPath} from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serialize the context as JSON-LD
fs.writeFileSync(
  path.join(__dirname, '..', 'contexts', ctx.constants.CONTEXT_FILENAME),
  JSON.stringify(ctx.CONTEXT, null, 2) + '\n'
);
