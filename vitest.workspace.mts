import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    extends: 'vitest.config.mts',
    test: {
      name: 'node',
      environment: 'node',
    },
  },

  {
    extends: 'vitest.config.mts',
    test: {
      name: 'jsdom',
      environment: 'jsdom',
    },
  },
]);
