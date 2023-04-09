module.exports = {
  extends: ['plugin:import/typescript', '@lad-tech/eslint-config'],
  settings: {
    'import/resolver': {
      typescript: {alwaysTryTypes: true},
    },
  },
};
