/*!
 * Copyright (c) 2024 Digital Bazaar, Inc. All rights reserved.
 */
import context from './context.js';

export const constants = {
  // default context output filename under ./contexts/
  CONTEXT_FILENAME: 'vc-bitstring-status-list-v1.jsonld',
  // default context well known URL id
  CONTEXT_URL: 'https://www.w3.org/ns/credentials/status/v1',
  // default context CBOR-LD codec id
  // value between 0x0 and 0x7FFF for globally registered term codec values
  // or >= 0x8000 for app-specific local terms
  CBORLD_VALUE: 0x0
};

// map of all context URLs to context data
export const contexts = new Map();
contexts.set(constants.CONTEXT_URL, context);

// map of all context URLs to CBOR-LD codec ids
export const appContextMap = new Map();
appContextMap.set(constants.CONTEXT_URL, constants.CBORLD_VALUE);

export const CONTEXT = context;
export const CONTEXT_URL = constants.CONTEXT_URL;
