

let date = document.getElementById("task-deadline");

document.getElementById('button').addEventListener(click,print)

function print() {
   
    
    let User_Input_Value = new Date(date.value).getTime();
    let  Current_Time = new Date().getTime();

    // y = date.value
    // let User_Input_Value = new Date(`${y}`).getTime();
    // console.log(User_Input_Value)
    // console.log(`Input date in second${User_Input_Value}`)
    // console.log(Current_Time)
    // console.log(`Today date in second${Current_Time}`)

    let gap = User_Input_Value - Current_Time; 
    console.log(User_Input_Value)
     if(gap>=0){
    let day =Math.floor((gap/(1000*60*60*24)))
    let hours = Math.floor((gap% (1000*60*60*24) )/ (1000*60*60));
    let minutes =Math.floor((gap%(1000*60*60))/ (1000 * 60));
    let second = Math.floor((gap%(1000*60))/(1000))

    console.log(`The calcualted day is ${day}`)
    console.log(`The calculated hour is ${hours}`)
    console.log(`The calculated minute is ${minutes}`)
    console.log(`The calculated second is ${second}`)
    document.querySelector('.days').innerHTML =day;
    document.querySelector('.hours').innerHTML =hours;
    document.querySelector('.minutes').innerHTML =minutes;
    document.querySelector('.seconds').innerHTML =second;

    }

    else{alert('Please Enter a vaid date');
    }
   



}

let button = document.getElementById('button');



// if(date.value){
//     setInterval(print,1000)}
//     else{console.log('enter the value first')}

    // setInterval(print,1000)
