document.addEventListener('DOMContentLoaded', function() {
   function hideloader(){
const loader = document.querySelector('.loader-body');
const body = document.querySelector('.main-body');
const footer = document.getElementById('footer'); 
const header= document.getElementById('header');
if(loader)
{
loader.style.display='none';
body.style.display='block';
}
if (footer) {
   footer.style.display = 'block';
}
if(header){
   header.style.display = 'flex'
}
}
setTimeout(hideloader, 1000);
//hideloader();
}
);

   localStorage.setItem('lastPage', window.location.href);

function pre() {
    window.history.back();
}

document.getElementById('previous').addEventListener('click', pre);