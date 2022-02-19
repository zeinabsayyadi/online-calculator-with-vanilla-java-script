
let result = document.getElementById('result');
let clearBtn = document.getElementById('clearBtn');
let equalBtn = document.getElementById('equalBtn');
let deleteBtn = document.getElementById('deleteBtn');
let normalBtn = document.getElementsByClassName('normalBtn');


//change display 

result.innerHTML = "";
for (let i = 0 ; i < normalBtn.length; i++) {
    normalBtn[i].addEventListener('click' , (e)=>{
        let lastCh = result.innerHTML.slice(-1);
        let inpt = normalBtn[i].innerHTML;
        if ((lastCh == '/' || lastCh == '+' || lastCh == '-' || lastCh == '*' ) && (inpt == '/' || inpt == '+' || inpt == '-' || inpt == '*')) return;
        else if((result.innerHTML.includes('.')) && inpt =='.') return ;
        else{
            result.innerHTML += normalBtn[i].innerHTML; 
        }
    })  
 }

//calculate
equalBtn.addEventListener('click', (e)=>{
    result.innerHTML = eval(result.innerHTML);
})

 // clear result
 clearBtn.addEventListener('click', (e)=>{
    result.innerHTML = "";
    });
    
/*delete single number*/
deleteBtn.addEventListener('click', (e)=>{
result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-1);

});