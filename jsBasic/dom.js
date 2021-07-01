//console.log(document);

let clickMe = document.getElementById("click");

//console.log(clickMe);

let Click = () => {
    console.log("button clicked");
}

//Manual

let clickMe2 = document.getElementById("click2");

clickMe2.addEventListener('click', () =>{
    console.log('Button2 Clicked');
})

clickMe2.addEventListener('mouseup', () =>{
    console.log('Button2 mouseup');
})

clickMe2.addEventListener('mousedown', () =>{
    console.log('Button2 mousedown');
})

clickMe2.addEventListener('mouseenter', () =>{
    console.log('Button2 mouse enter');
})

clickMe2.addEventListener('mouseleave', () =>{
    console.log('Button2 mouseleave');
})

///

let paragraphs = document.getElementById('para');

paragraphs.style.color = "red";

//create tag

let newDiv = document.getEl ementById('div');

let p = document.createElement('p');
p.textContent = 'This is a dynamic paragraphs created by us';
p.style.fontSize = '20px';

newDiv.append(p);

