module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  useTabs: true,
  tabWidth: 2,
  semi: true,
  printWidth: 120,
  endOfLine: 'auto',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
  ],
};
