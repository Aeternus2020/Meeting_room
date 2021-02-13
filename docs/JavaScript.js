

let modal = document.getElementById('newEvent');
let btn = document.getElementById('event');
let span = document.getElementsByClassName('close')[0];
let cmp = document.getElementById('complete');

btn.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
  return;
}




cmp.onclick = function AddEvant() {

const table = document.getElementById('table');
const timei = document.getElementById('time');
const timeii = document.getElementById('time').selectedIndex;
const dayi = document.getElementById('day');
const dayii = document.getElementById('day').selectedIndex;
const ttli = document.getElementById('title');
const  mmbi = document.getElementById('members');
const select = table.rows[timeii].cells[dayii];
const  selectarray = [mmbi.value, timei.value, dayi.value];

  if ((mmbi.selectedIndex > 0) && (timeii > 0) && (dayii > 0) && (ttli.selectedIndex > 0)) {
  
    select.innerHTML = `<div class='newevant'>
                          <div class='title'>${ttli.value   +   ' Member: ' +  mmbi.value}</div>
                          <div class="basket"></div>
                        </div>`;                 
  }
  else {
    alert ('Check the correctness of the filled in data');
  }
  localStorage.setItem(selectarray, JSON.stringify(selectarray));
  array = JSON.parse(localStorage.getItem('array')); 
}

const bsc = document.getElementsByClassName('basket');

bsc.onclick = function() {
  document.getElementById('newevant').remove();
}
