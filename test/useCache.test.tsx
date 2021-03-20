import { renderHook } from '@testing-library/react-hooks';
import createCache from '../src';

describe('use-delayed', () => {
  it('exports', () => {
    expect(typeof createCache).toEqual('function');
  });

  it('returns hook', () => {
    expect(typeof createCache(() => 1)).toEqual('function');
  });

  it('caches data', async () => {
    expect.assertions(5);

    let useCache = createCache((param: string) => {
      expect(['a', 'b'].includes(param)).toBeTruthy();
      return 'cached_' + param;
    });

    let { result: resultA } = renderHook(() => useCache('a'));
    expect(resultA.current).toBe('cached_a');

    let { result: resultB } = renderHook(() => useCache('b'));
    expect(resultB.current).toBe('cached_b');

    let { result: resultA2 } = renderHook(() => useCache('a'));
    expect(resultA2.current).toBe('cached_a');
  });
});
