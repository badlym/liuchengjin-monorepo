module.exports = {
  ...require('@liuchengjin/lint-staged-config'),
  '*.{ts,tsx}': ['tsc --noEmit --skipLibCheck'],
}
