# Vitest reproduction: `request.headers` is not an instance of `Headers` when using JSDOM

This is a reproduction for https://github.com/vitest-dev/vitest/issues/7389.

## Getting started

1. Clone the repository:

   ```bash
   git clone git@github.com:diego-aquino/vitest-jsdom-request-headers.git
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

## Reproduction

1. Run the test suite:

   ```bash
   pnpm test
   ```

   The suite contains only one test, checking if `request.headers` is an instance of the global `Headers` class.

   ```ts
   const request = new Request('https://example.com');
   expect(request.headers).toBeInstanceOf(Headers);
   ```

   The test passes when `environment: 'node'`, but fails when `environment: 'jsdom'`.
