const calc = document.querySelector(".calc");
const result = document.querySelector('#result');
let flag = true;
let mem = '';
calc.addEventListener('click', function (ev){
    if(!ev.target.classList.contains('calc_btn')){
        return
    };
   const value = ev.target.innerText;
   switch (value) {
       case 'C':
           result.innerText = '';
           break;
       case 'M':
           if (flag){
               mem = result.innerText;
               flag = !flag
           }
           else {
               result.innerText = mem;
               flag = !flag;
           }
       case '=':
           if (result.innerText.search(/[^0-9*/+-.]/mi) !== -1) {
               return;
           }
           if (eval(result.innerText) !== 'undefined')
           result.innerText = eval(result.innerText)
           break;
       default:
           if (result.innerText.length <= 15) {
               result.innerText += value
           }
   }
});