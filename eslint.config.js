import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'
import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import sortPlugin from 'eslint-plugin-sort'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@next/next': nextPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'sort': sortPlugin,
    },
    settings: {
      react: {
        version: '19.3',
      },
    },
    rules: {
      // Next.js rules
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      
      // React rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-deprecated': 'warn',
      
      // 元の設定にあったルール
      'react-hooks/exhaustive-deps': 'off',
      'import/no-anonymous-default-export': 'off',
      'react/display-name': 'off',
      'react/jsx-sort-props': 'warn',
      'react/no-children-prop': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'error',
      'sort/type-properties': 'warn',
      'prefer-const': 'warn',
    },
  },
  prettierConfig,
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'public/**',
      'eslint.config.js',
    ],
  }
)