// set initial count
let count=0;

// select value and buttons
let value= document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn){
    btn.addEventListener('click',function(e){
        if (e.currentTarget.classList.contains("decrease")){
            count--;
        }
        else if (e.currentTarget.classList.contains("increase")){
            count++;
        }
        else if (e.currentTarget.classList.contains("reset")){
            count=0;
        }
        if (count>0){
            value.style.color="green"
        }
        else if (count<0){
            value.style.color="red"
        }
        if (count==0){
            value.style.color="black"
        }
        value.textContent = count
    })
})
