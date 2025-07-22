export default {
  // 对 JS/TS/JSX/TSX 文件执行 ESLint 检查并自动修复
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],

  // 对 CSS/LESS 文件执行 Stylelint 检查并自动修复
  '*.{css,less}': ['stylelint --fix', 'stylelint'],

  // 对 JSON/Markdown 等文件用 Prettier 格式化
  '*.{json,md,yml}': ['prettier --write']
}
