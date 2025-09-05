module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended'],
  rules: {
    // allow styled-jsx attributes on <style> if used elsewhere
    'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
    // we’ll fix anchors in code
    'jsx-a11y/anchor-is-valid': 'error',
    // we’ll disable next/image rule per-file to avoid pixel changes
    '@next/next/no-img-element': 'warn',
  },
};
