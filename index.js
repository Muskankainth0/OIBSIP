// console.log("working")
let string="";
let buttons= document.querySelectorAll('.button, .button1');
Array.from(buttons).forEach((button)=>{
    button.addEventListener ('click',(e)=>{
        if ( e.target.innerHTML == '='){
            string= eval(string);
            document.querySelector('input').value =string;
        }
         else if ( e.target.innerHTML == 'AC'){
            string= "";
            document.querySelector('input').value =string;
        }
        else if ( e.target.innerHTML == 'C'){
            string= "";
            document.querySelector('input').value =string;
        }
        else if( e.target.innerHTML=='DEL'){
            string= string.substring(0,string.length-1);
            document.querySelector('input').value =string;
        }
        else if( e.target.innerHTML=='√'){
            string= Math.sqrt(Number(string));
            document.querySelector('input').value =string;
        }
        else if( e.target.innerHTML=='^2'){
            string=Math.pow(Number(string),2);
            document.querySelector('input').value =string;
        }
        else{
        console.log(e.target)
        string= string+ e.target.innerHTML;
        document.querySelector('input').value =string;}
       
    })
    
})
