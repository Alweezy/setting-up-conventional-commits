module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [2, 'always', 'lower-case'],
    'scope-enum': [
      2,
      'always',
      [
        'api',
        'ui',
        'auth',
        'database',
        'config',
        'ci',
        'core',
        'deps',
        'testing',
        'tooling',
        'security'
      ],
    ],
    'header-max-length': [2, 'always', 50],
    'header-min-length': [2, 'always', 5]
  },
};
