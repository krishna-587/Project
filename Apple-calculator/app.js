

let buttons = document.querySelectorAll('button'); 
let input = document.querySelector('input');

for(let button of buttons){
    button.addEventListener('click' , function(event){
       let btntxt = event.target.innerText;
       if(btntxt === 'AC'){
            input.value = '';
       }
       else if(btntxt=== '='){
        try{
            input.value = eval(input.value);
        }
        catch{
            input.value = 'Error';
        }
       }
       else{
        input.value += btntxt;
       }
       
    })
}


setInterval(() => {
    input.value = '';
}, 20000);