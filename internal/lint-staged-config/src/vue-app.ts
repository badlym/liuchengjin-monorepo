module.exports = {
  // '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix', 'vue-tsc --noEmit --skipLibCheck'],
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['prettier --write', 'eslint --fix', 'stylelint --fix'],
  '*.{scss,less,styl,html}': ['prettier --write', 'stylelint --fix'],
  '*.md': ['prettier --write'],
}
