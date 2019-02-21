


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
    	list.innerHTML += '<li>'  + todo.value +  '</li>';
    	store();
      $(function () { //ready
          toastr.info('Successfully added');
      });

     
   $('#addTodo').modal('hide');

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
      // list.innerHTML = '<li>Hello World</span></li>' +
      // '<li>Welcome to my todo list</li>';
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();

//filter functions
$(document).ready(function(){
  $("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#list li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// var input = document.getElementById('filter');
// input.onkeyup = function () {
//     var filter = input.value.toUpperCase();
//     var lis = document.getElementsByTagName('li');
//     for (var i = 0; i < lis.length; i++) {
//         var list = lis[i].getElementsByTagName('li').innerHTML;
//         if (list.toUpperCase().indexOf(filter) > -1) 
//             lis[i].style.display = '';
//         else
//             lis[i].style.display = 'none';
//     }
// }


//time function

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


















// //notification
// var countDownDate = new Date();
//   result = countDownDate.setMinutes( countDownDate.getMinutes() + 5 );

//   //alert(result.toString());




// //filter through list
// var input = document.getElementById('myInput');
// input.onkeyup = function () {
//     var filter = input.value.toUpperCase();
//     var lis = document.getElementsByTagName('li');
//     for (var i = 0; i < lis.length; i++) {
//         var label = lis[i].getElementsByTagName('label')[0].innerHTML;
//         if (label.toUpperCase().indexOf(filter) == 0) 
//             lis[i].style.display = 'list-item';
//         else
//             lis[i].style.display = 'none';
//     }
//   }




// function updateItemStatus(){
//   var checklist_id = this.id.replace("itm_", "");
//   var itemText = document.getElementById("item_" + checklist_id);


//   if(this.checked == true){
//     itemText.style.textDecoration = "line-through";
//     itemText.style.color = "#c00";
//     itemText.style.fontWeight =  "800";
//   }else{
//     itemText.style.textDecoration = "none";
//     itemText.style.color = "#000";
//     itemText.style.fontWeight = "400";
//   }
  
  
  
// }

// function renameItem(){
//   var newText  = prompt("Enter New name? ");

//   if (!newText||newText == ""|| newText == " ") {
//     return false;
//   }

//   this.innerText = newText;
// }
// function removeItem(){
//   var spanId = this.id.replace("item_","");
//   document.getElementById("li_" + spanId).style.display = "none";
// }

// function addNewItem(list, itemText) {
//   totalItems++;
//  var date = new Date();
//   var id = date.getMinutes() + date.getSeconds() + date.getMilliseconds();

//   var listItem = document.createElement("li");
//   listItem.id = "li_" + id;

//   var checkBox = document.createElement("input");
//   checkBox.type = "checkbox";
//   checkBox.id = "itm_" + id;
//   checkBox.onclick = updateItemStatus;
  

//   var span = document.createElement("span");
//   span.id = "item_" + id;
//   span.innerText = itemText;

//   span.onclick = renameItem;
//   span.ondblclick =removeItem;

//   listItem.appendChild(checkBox);
//   listItem.appendChild(span);
//   //listItem.innerText = itemText;

 
//   list.appendChild(listItem);


// }
// function store() {
//     window.localStorage.myitems = inItemText.innerHTML;
//   }

// function getValues() {
//     var storedValues = window.localStorage.myitems;
//     if(!storedValues) {
//       listItem.innerHTML = '';
//     }
//     else {
//       listItem.innerHTML = storedValues;
//     }
//   }

// var totalItems = 0;
// var inItemText = document.getElementById('inItemText');

// inItemText.focus();
// inItemText.onkeyup = function(event){
//   if (event.which == 13) {
//     var itemText = inItemText.value;
//     store();
//     if (!itemText || itemText == "" || itemText == " ") {
//       return false;
//     }
    
    
//     addNewItem(document.getElementById("allTask"), itemText);

//     inItemText.focus();
//     inItemText.select();

//   }
// };






