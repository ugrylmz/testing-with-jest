# JEST
## Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js and Svelte.

```
it('message', () => {
  expect("hello").toBe("hello");
  expect("hello").toEqual("hello");
})
```

## Async test 
``` 
expect.assertions(1);
  return api.apiFunc(fetch).then((data) => {
    expect(data.feature).toEqual([expected value]);
  });
```


## <a href='https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md'>Jest-Cheat-Sheet </a>