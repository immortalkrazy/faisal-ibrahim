// declare variables

let btn = document.getElementById('btn');
let lnk = document.getElementById('lnk');
let lnkHR = document.getElementById('lnkHR');
let txt = document.getElementById('txt');

// put a listener on btn
btn.addEventListener('click', buttonClicked);

// function to perforn in the event of click
function buttonClicked(ev) {
    // webpage alert message
    alert("CLICKED!");
    // output in the console
    console.log(ev.type, ev.target, ev.currentTarget);
}

// event listener on google link button
lnk.addEventListener('click', doSomethingIWant);

// event listener on HR link
lnkHR.addEventListener('click', function(){
    alert("Click OK");
});

function doSomethingIWant(ev) {
    alert("I did click");
    // make it not to go to site
    ev.preventDefault();
    // should do what I want (just console output)
    console.log(ev.type, ev.target, ev.currentTarget);
}

// 3 different examples

txt.addEventListener('input', ev=>{
    // checks for input
    console.log(ev.type, ev.target, ev.target.value);
});

txt.addEventListener('change', ev=>{
    // checks for input
    console.log(ev.type, ev.target, ev.target.value);
});

txt.addEventListener('blur', ev=>{
    console.log(ev.type);
});
