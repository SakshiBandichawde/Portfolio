window.onscroll=()=>{
    if(window.scrollY>80){
        document.querySelector('.header .header1').classList.add('active');
    }
    else{
        document.querySelector('.header .header1').classList.remove('active');
    }
}
window.onload=()=>{
    if(window.scrollY>80){
        document.querySelector('.header .header1').classList.add('active');
    }
    else{
        document.querySelector('.header .header1').classList.remove('active');
    }
}
var sidemenu=document.getElementById("sidemenu")
        function openmenu(){
            sidemenu.style.right="0"
        }
        function closemenu(){
            sidemenu.style.right="-30rem"
          
        }


        const scriptURL = 'https://script.google.com/macros/s/AKfycbz1xwSC2m0Aun-4z1N3t1Ok-YSmHPNdGNOUBJWtSp7YIwhwdu39vI59kwGPhxCfFbcc/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg=document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {msg.innerHTML="Message Sent Successfully!"
             setTimeout(function(){
                msg.innerHTML=""
             },4000)
             form.reset()
        })
            .catch(error => console.error('Error!', error.message))
        })

