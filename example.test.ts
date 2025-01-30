import { expect, it } from 'vitest';

it('`request.headers` should be an instance of `Headers`', () => {
  const request = new Request('http://localhost');
  expect(request.headers).toBeInstanceOf(Headers);
});
