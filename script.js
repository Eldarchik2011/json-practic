let json = ['user1', 'user2', 'user3', 'user4', 'user5'];
console.log(JSON.stringify(json));
//получить коллекцию списка элементов и преобразовать ее в массив (array.from)
let li = Array.from(document.querySelectorAll('.ul li'));
// перебрать все элементы из списка и вернуть их текстовое содержимое 
const cities = li.map((city) => {
    return city.textContent
})

console.log(JSON.stringify(cities));

let userlist = document.querySelector('.user-list')
let json2 = '["user1","user2","user3","user4","user5"]';
let users = JSON.parse(json2)
for (let user of users) {
    let newLi = document.createElement('li')
    userlist.appendChild(newLi)
    newLi.textContent = user
}



let json3 = `[
    {
    "name": "user1",
    "age": 25,
    "salary": 1000
    },
    {
    "name": "user2",
    "age": 26,
    "salary": 2000
    },
    {
    "name": "user3",
    "age": 27,
    "salary": 3000
    }
    ]`;

let employees = JSON.parse(json3)
let employeesBody = document.querySelector('#employeesBody')
for (let employee of employees) {
    let tr = document.createElement('tr')
    employeesBody.appendChild(tr)
    tr.innerHTML = `
    <td>${employee.name}</td>
    <td>${employee.age}</td>
    <td>${employee.salary}</td>
    `
}
