const toggleBtn = document.querySelector('.togglebtn')
const dropDownmenu = document.querySelector('.dropdownlinks')

toggleBtn.onclick = function(){
    dropDownmenu.classList.toggle('open');
}