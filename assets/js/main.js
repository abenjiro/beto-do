


//task functions

(function(){
  
  var list = document.querySelector('#list'),
      form = document.querySelector('#formTodo'),
      todo = document.querySelector('#todo');

  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    if (todo.value == ''|| todo.value.trim() == '') {
    	$(function () { //ready
          toastr.info('Please enter a Task');
      });

    }else{
    	list.innerHTML += '<li>' + '<span class="checklist">' + todo.value + '</span>' +  '</li>';
    	store();
      $(function () { //ready
          toastr.info('Successfully added');
      });
    	todo.value = "";
    }
    
  },false)
  
  list.addEventListener('dblclick',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
       $(function () { //ready
          toastr.info('todo task deleted');
      });
    } else {
      t.classList.add('checked');
    }
    store();
  },false)

  list.addEventListener('click',function(e){
    var t = e.target;
     
      t.classList.add('checked');
   
    store();
  },false)
  
  function store() {
    window.localStorage.myitems = list.innerHTML;
  }
  
  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = '';
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();

//filter functions

var input = document.getElementById('filter');
input.onkeyup = function () {
    var filter = input.value.toUpperCase();
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        var list = lis[i].getElementsByClassName('checklist')[0].innerHTML;
        if (list.toUpperCase().indexOf(filter) == 0) 
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }
}


//time function

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}






