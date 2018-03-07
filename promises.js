const posts = 'http://willianjusten.com.brsearch.json';
posts
  .then(data => data.json())
  .then(data => data.map(post => console.log(post.title)))
  .catch(err => console.log(err));

