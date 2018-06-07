> "The Promise object is used for deferred and asynchronous computations"- MDN

# Links

# Vocabulary

- **Fulfilled** (Resolved) : It worked ;)
- **Rejected**: It didn`t work ;(
- **Pending**: Still waiting...
- **Settled**: Something happened!

# Promise Timeline
![Promise Timeline](https://i.imgur.com/HkVpL6c.png)

- Potentially **blocking**
![Potentially blocking](https://i.imgur.com/bm49lSK.png)

- Examples
  - Second **resolve** do nothing
![Example](https://i.imgur.com/gVxxMfx.png)

# Syntax
- Create
```js
new Promise( (resolve, [reject]) => {
  if(true) resolve()
  if(false) reject();
});
```
- Get callbacks
```js
new Promise()
  .then()
  .catch();
```

# Functions
- Promisse.all
  - Rejects if just **one** Promise Rejects!
  - Resolve after **every** Promise Resolve!
```js
Promise.all([p1, p2, p3]);
```

# Error Handling Strategies
![Error Handling Strategies](https://i.imgur.com/9hXNkic.png)

# observations
