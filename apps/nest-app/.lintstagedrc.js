module.exports = {
  ...require('@strawberry/lint-staged-config'),
  '*.{ts,tsx}': ['tsc --noEmit --skipLibCheck'],
}
