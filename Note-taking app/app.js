

//selecting input
let titleEle = document.querySelector('#title');
// selecting ul
let listEle = document.querySelector('#list');
// selecting my button for event
let addbtn = document.querySelector('#add-btn');


let tn = document.querySelector('#title-box');

// let dtbtn = document.querySelector('#delete-btn');
// titleEle.addEventListener('click' , function(){
//     if(titleEle.textContent === "You can write your notes here...."){
//         titleEle.textContent = '';
//     }
// })

tn.addEventListener('click', function () {
    if(titleEle.textContent === "You can write your notes here...."){
            titleEle.textContent = '';
     }
    tn.classList.add('active-title');
    titleEle.focus();
});

addbtn.addEventListener('click' , function(){

    //extract value from input
    
    let titletxt = titleEle.textContent;
    //creating the li for appending
    let li = document.createElement('li');
    
    //inserting the text inside li from input value
    li.innerHTML = titletxt;
    
    listEle.appendChild(li);

    // clear the input

    titleEle.textContent = '';

    // remove the li after clicking on li
    li.addEventListener('click' , function(){
        // this.remove();
        li.remove();
    })
})






/*dtbtn.addEventListener('click' , function(){
    listEle.removeChild(listEle.lastChild);
})*/