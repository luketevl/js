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