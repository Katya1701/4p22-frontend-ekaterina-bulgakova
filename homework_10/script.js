'use strict'

const button = document.getElementById("get-users");

button.addEventListener('click', () => {
    
fetch("https://reqres.in/api/users?per_page=12", { method: "GET"})
    .then((response) => {
        response.json().then((response) => {

        console.log(response);

        response.data.forEach(element => {
            console.log(element.last_name)
        });

        const arrFilter = response.data.filter(user => (user.last_name[0] === 'F'));
        arrFilter.forEach(el => {
            console.log(el);
        });

        const arrReduce = response.data.reduce((acc, user) => {
            if (acc === "") {
              acc = `${user.first_name} ${user.last_name}`;
              return acc;
            }
            acc = `${acc}, ${user.first_name} ${user.last_name}`;
            return acc;
          }, "");
        
        console.log(
            `Наша база содержит данные следующих пользователей: ${arrReduce} .`
        );

        for( let i in response.data[0]){
            console.log(i);
        }

        const li = document.createElement("li");
        const liContent = document.createTextNode("test li");
        li.appendChild(liContent);

        const position = document.querySelector("#usersList");
        position.appendChild(li);  
        });
    })
.catch((e) => {
    console.log(e);
});
});