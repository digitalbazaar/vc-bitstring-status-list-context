/*!
 * Copyright (c) 2024 Digital Bazaar, Inc. All rights reserved.
 */
// Use JSON style for context
/* eslint quotes: ['error', 'double'] */
/* eslint quote-props: ['error', 'always'] */
/* eslint-disable max-len */

export default
{
  "@context": {
    "@protected": true,

    "BitstringStatusListCredential": "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential",

    "BitstringStatusList": {
      "@id": "https://www.w3.org/ns/credentials/status#BitstringStatusList",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "statusPurpose":
          "https://www.w3.org/ns/credentials/status#statusPurpose",
        "encodedList": {
          "@id": "https://www.w3.org/ns/credentials/status#encodedList",
          "@type": "https://w3id.org/security#multibase"
        },
        "ttl": "https://www.w3.org/ns/credentials/status#ttl",
        "statusReference":
          "https://www.w3.org/ns/credentials/status#statusReference",
        "statusSize":
          "https://www.w3.org/ns/credentials/status#statusSize",
        "statusMessage": {
          "@id": "https://www.w3.org/ns/credentials/status#statusMessage",
          "@context": {
            "@protected": true,

            "id": "@id",
            "type": "@type",

            "status": "https://www.w3.org/ns/credentials/status#status",
            "message": "https://www.w3.org/ns/credentials/status#message"
          }
        }
      }
    },

    "BitstringStatusListEntry": {
      "@id":
        "https://www.w3.org/ns/credentials/status#BitstringStatusListEntry",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "statusPurpose":
          "https://www.w3.org/ns/credentials/status#statusPurpose",
        "statusListIndex":
          "https://www.w3.org/ns/credentials/status#statusListIndex",
        "statusListCredential": {
          "@id":
            "https://www.w3.org/ns/credentials/status#statusListCredential",
          "@type": "@id"
        }
      }
    }
  }
};
