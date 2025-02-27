# @digitalbazaar/vc-bitstring-status-list-context ChangeLog

## 1.1.0 - 2025-02-xx

### Changed
- Update to latest VC Bitstring Status List context.
  - Align with VC Bitstring Status List spec.
￼ - Move `statusMessage`, `statusReference`, and `statusSize` from
￼    `BitstringStatusList` to `BitstringStatusListEntry`.
  - Change `statusSize` data type from `xsd:positiveInteger` to `xsd:integer`.
  - Add missing `id` and `type` terms.
  - Add type for `statusReference` and `statusSize`.

## 1.0.0 - 2024-02-19

- Initial version.
- See git for earlier history.
