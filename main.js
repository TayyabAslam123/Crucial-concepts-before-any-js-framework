// Arrow functions
let calculate =(a,b)=>{

    return a+b;
}

console.log(calculate(2,2));

// Destructuring
const user ={
    'name': 'tayyab',
    'age': 26,
    'gender': 'male'
}

console.log(user.age);
console.log('-------');

let myObj = {
    'first_name':'John',
    'last_name': 'doe'
}

console.log(myObj.first_name + ' ' +myObj.last_name);

//
const objects = ['table', 'iPhone', 'apple']
const [furniture, mobile, fruit] = objects
console.log(furniture);

// Array Methods

// ( MAP )
const numbers = [9, 16, 25, 36];
const squaredArr = numbers.map(function(val){
    return val = val+1;
})

console.log(squaredArr);


// Short Conditionals
function findWeekend(day){

    let holiday = day =='sunday' || day == 'saturday' ? 'its a holiday' : 'its a weekday';
    return holiday;
}

let ans = findWeekend('saturday');

console.log(ans);

//  Template Literals

let currentUser = 'Tayyab Aslam Ch';

let welcomeMsg = `Welcome ${currentUser} , hope you are doing well `;

console.log(welcomeMsg);

// Spread Operators
const names = ['Mary', 'Jane']; 
const groupMembers = ['Fred', ...names, 'Angela']; // ["Fred", "Mary", "Jane", "Angel
console.log(groupMembers);
//
const address = {'address': 'test'};
const x = {'name':'tayyab', ...address};
console.log(x);
//

// Promises
console.log('-- Promise --');
let pr=new Promise((resolve,reject)=>{

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://jsonplaceholder.typicode.com/users/1', false ); // false for synchronous request
    xmlHttp.send();
    console.log(xmlHttp);
    if(xmlHttp.status==200){
        resolve(xmlHttp.response);
    }else{
        reject('Something went wrong !');
    }

});

pr.then((val)=>{
    val  = JSON.parse(val);
    document.getElementById('api-resp').textContent = val.name;
}).catch((err)=>{
    console.log(err);
    alert(err);
});

// FETCH API

fetch('http://ip-api.com/json',
    {   method: "GET",
        mode: 'cors',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'}
    }).then(function(resp){
        console.log('Data received from fetch api')
        console.log(resp.status)
        console.log(resp.ok)
        return resp.json()
    })
    .then(function(val){
        console.log(val)
    }).catch(function(err){
        console.log('ERROR :')
        console.log(err)
    });

// ASYNC / AWAIT  
  
console.log('ASYNC / AWAIT ');
async function getCityInfo(){    

    // let temp = new Promise((resolve,reject)=>{
        let temp = setTimeout(()=>{
            console.log('Today temprature is 21 C');
        },5000);
    // });    

    // let time_ = new Promise((resolve,reject)=>{
        let time_ = setTimeout(()=>{
            console.log('The time is 4:00 AM');
        },3000);
    // });    

    let val_1 = await temp;
    let val_2 = await time_;
    return [val_1, val_2];

}

let a = getCityInfo();
console.log(a);