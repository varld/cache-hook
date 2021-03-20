import { useMemo } from 'react';

export let createCache = <I, O>(processor: (arg: I) => O) => {
  let cache = new Map<I, O>();

  let useCache = (i: I) =>
    useMemo(() => {
      if (cache.has(i)) return cache.get(i);

      let o = processor(i);
      cache.set(i, o);
      return o;
    }, [i]);

  return useCache;
};

export default createCache;
