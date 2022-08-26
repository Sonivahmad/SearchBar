let input = document.querySelector(".put");
let button = document.querySelector(".btn");
button.addEventListener("click" , function(event){


fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken',{
method: 'POST',
headers: {
    'Content-type': 'application/json'
},
body: JSON.stringify({
    name: 'User 1'
})
}).then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))
})