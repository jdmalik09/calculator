let text = document.getElementById('text');
let buttons = document.querySelectorAll('button');

let answer = "";

let arr = Array.from(buttons);

arr.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        
        if(e.target.innerText == '='){
            answer = eval(answer);
            text.value = answer; 
        }else if(e.target.innerText == 'AC'){
            answer = "";
            text.value = answer;
        }else if(e.target.innerText == 'DEL'){
            answer = answer.substring(0, answer.length -1);
            text.value = answer;
        }else{
            answer += e.target.innerText;
            text.value = answer; 
        }
    
    });
});


