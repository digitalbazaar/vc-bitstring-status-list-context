/*!
 * Copyright (c) 2024 Digital Bazaar, Inc. All rights reserved.
 */
import chai from 'chai';
chai.should();
const {expect} = chai;

import {
  appContextMap, constants, CONTEXT, CONTEXT_URL, contexts
} from '../js/index.js';

describe('Context (import)', () => {
  it('constants', async () => {
    expect(appContextMap).to.exist;
    expect(constants).to.exist;
    expect(constants).to.have.property('CBORLD_VALUE');
    expect(CONTEXT_URL).to.exist;
    expect(CONTEXT).to.exist;
  });

  it('contexts', async () => {
    expect(contexts.get(CONTEXT_URL)).to.have.property('@context');
  });

  it('appContextMap', async () => {
    expect(appContextMap.get(CONTEXT_URL)).to.exist;
  });
});
