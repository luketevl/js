# js
Javascript


# Promises
```js
const posts = 'http://willianjusten.com.brsearch.json';
posts
  .then(data => data.json())
  .then(data => data.map(post = > console.log(post.title)))
  .catch(err => console.log(err));
```

# Async & Await
- **Async** define the code is **asynchronous**
  - Required **Promise** protocol
  - Is a **keyword**
- **Await** wait the result, and return
  - Is only valid in **async function**
```js

async function getPosts(){
  const response = await fetch('http://willianjusten.com.brsearch.json');
  const data = await response.json();
  data.map(post => console.log(post.title))
}
getPosts();


  // Uing Multiples Promises
  async function getUsers(users){
    const promises = users.map(user => fetch(`https://api.github.com/users/${user}`).then(r => r.json()));    
    const primises = await Promise.all(promises);
    console.log(promises);
  }

  getUsers(['luketevl', 'lukete']);
```

# padStart & padEnd
- Complement string in string in string
```js
console.log(''.padStart(5, 'Hi'))
console.log('huhu'.padStart(5, 'HA'))

console.log(''.padEnd, 'Hi'))
console.log('huhu'.padEnd(5, 'HA'))
```

# Exponentiations
```js
// OLD way
console.log(Mat.pow(2,3));

// NEW
consoe.log(2 ** 3);
```


# Includes
```js
const arr = [1,2,3];

// Old way
console.log(arr.indexOf(3));

// New
console.log(arr.includes(3));
```

# Object Entries
> The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

```js
const animals = {
  camel: 3,
  llama: 2,
  alpaca: 5
}
const animalsMap = new Map(Object.entries(animals))
console.log(animalsMap.has('llama'))
```

# Object Values
```js
const animals = {
  camel: 3,
  llama: 2,
  alpaca: 5
}
console.log(Object.value(animals))
```
