module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  // '*.{ts,tsx}': ['tsc --noEmit --skipLibCheck'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.{scss,less,styl,html}': ['prettier --write', 'stylelint --fix'],
  '*.md': ['prettier --write'],
}
