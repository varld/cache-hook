# Use Cache

A React hook for caching data globally. 

## About

React's `useMemo` is great, but it only caches the result for the lifetime of a single component.
This hook ensures that an expensive operation will only be performed once for the same input within the lifetime of a whole page load.

## Install

```bash
# yarn
yarn add cache-hook

# npm
npm install --save cache-hook
```

## Usage

```tsx
import createCache from 'cache-hook';

let useCache = createCache(data => {
  // perform expensive operation
  return result;
})

let Component = () => {
  let cached = useCache('input');

  return (
    <div>
      Result: {cached}
    </div>
  )
}
```

## License

MIT © [Tobias Herber](https://github.com/herber)

[![Made by Varld](https://potato.varld.co/oss/badge.svg)](https://varld.co)
