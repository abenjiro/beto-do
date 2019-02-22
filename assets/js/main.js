
//filter functions
$(document).ready(function(){
  $("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#todolist li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});




//document.getElementById('complete-box'). = "TO DO LIST IS EMPTY, PLEASE CLICK ON THE PLUS SIGN TO ADD TO LIST.";



function updateItemStatus() {
  var cbId = this.id.replace("cb_", "");
  var itemText = document.getElementById("item_" + cbId);

  if(this.checked == true){
    itemText.style.textDecoration = "line-through";
    itemText.style.color = "#c00";
    itemText.style.fontWeight =  "800";

    $(function () { //ready
      toastr.info('Task Completed Successfully');
    });
    
  }else{
    itemText.style.textDecoration = "none";
    itemText.style.color = "#000";
    itemText.style.fontWeight = "400";
    $(function () { //ready
      toastr.warning('Task Pending');
    });
    
  }

}







function addNewItem(list, itemText) {

  if ($('#todolist li') == 0){
    document.getElementById('TDs').innerHTML = "TO DO LIST IS EMPTY, PLEASE CLICK ON THE PLUS SIGN TO ADD TO LIST.";

  }else{
    document.getElementById('TDs').innerHTML ="LIST OF ALL TODO";

  }

//           alert($("ul").has("li").length);
// if($("ul").has("li").length == 0) {

//     $("ul").html("Sorry, this is empty");
// }else{
//   alert('ben');
// }

totalItems++

var date = new Date();
var id = "" + date.getMinutes(); + date.getSeconds() + date.getMilliseconds() + "";

var listItem = document.createElement("li");
listItem.id = "li_" + id;

var checkBox = document.createElement("input");
checkBox.type = "checkbox";
checkBox.id = "cb_" + totalItems;
checkBox.onclick = updateItemStatus;

var span = document.createElement("span");
span.id = "item_" + totalItems;
span.innerHTML = itemText;

var edit = document.createElement("a");
edit.href = "#";
edit.innerHTML = "<button class='btn btn-light btn-xs text-center float-right edit' > <i class='far fa-edit'></i> </button>";
edit.addEventListener('click', editItem, false);


var deleteBtn = document.createElement("a");
deleteBtn.href = "#";
deleteBtn.innerHTML = "<button class='btn btn-light btn-xs text-center float-right delete' > <i class='fas fa-trash-alt'></i> </button>";
deleteBtn.addEventListener('click', removeItem, false);


listItem.appendChild(checkBox);
listItem.appendChild(span);
listItem.appendChild(deleteBtn);
listItem.appendChild(edit);




list.appendChild(listItem);
}


var totalItems = 0;
var lastUpdatedItemId = '';
var inItemText = document.getElementById("inItemText");
inItemText.focus();

var btnNew = document.getElementById("btnAdd");

let itemsArray = localStorage.getItem('inItemTexts') ? JSON.parse(localStorage.getItem('inItemTexts')) : [];
localStorage.setItem('inItemTexts', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('inItemTexts'));





btnNew.onclick = function() {
          // alert(btnNew);
          if (this.innerHTML == 'Save') {
            var inItemText = document.getElementById("inItemText");

            var itemText = inItemText.value;
            if (!itemText || itemText === "" || itemText === " "||inItemText.value.trim() == '') {
                  $(function () { //ready
                    toastr.error('Please enter a Task');
                  });
                  return false;

                }
                itemsArray.push(inItemText.value);
                localStorage.setItem('inItemTexts', JSON.stringify(itemsArray));
                // inItemText.value = "";
              
                addNewItem(document.getElementById("todolist"), itemText);

                inItemText.value = "";
                $(function () { //ready
                  toastr.success('To-do Successfully added');
                });
                $('#addTodo').modal('hide');

              } else if (this.innerHTML == 'EDIT') {

                this.innerHTML = 'Save';
                var inItemText = document.getElementById("inItemText");

                $(function () { //ready
                  toastr.success('Task Successfully Edited');
                });

                var itemText = inItemText.value;
                if (!itemText || itemText === "" || itemText === " ") {
                   $(function () { //ready
                    toastr.info('Please enter a Task');
                  });
                   return false;

                 }
                 document.getElementById(lastUpdatedItemId).innerHTML = itemText;
                 inItemText.value = "";
                 $('#addTodo').modal('hide');
               }
             }
             inItemText.onkeyup = function(event) {

              if (event.which == 13) {
                var itemText = inItemText.value;

                if (!itemText || itemText === "" || itemText === " ") {
                    $(function () { //ready
                      toastr.error('Please enter a Task');
                    });
                    return false;
                  }

                  itemsArray.push(inItemText.value);
                localStorage.setItem('inItemTexts', JSON.stringify(itemsArray));
                  addNewItem(document.getElementById("todolist"), itemText);

                  inItemText.value = "";
                $(function () { //ready
                  toastr.success('To-do Successfully added');
                });
               
                $('#addTodo').modal('hide');
                inItemText.focus();

                inItemText.select();
              }

            };

            function removeItem() {
              if (confirm("Are you sure, you want to delete Task")) {

                var li = this.parentNode;
                //alert(li);
                li.remove();
                 $(function () { //ready
                  toastr.error('Task deleted');
                });
                 if($("ul").has("li").length == 0) {
                  document.getElementById('TDs').innerHTML = "TO DO LIST IS EMPTY, PLEASE CLICK ON THE PLUS SIGN TO ADD TO LIST.";
                }

                // document.getElementById('TDs').innerHTML = "TO DO LIST IS EMPTY, PLEASE CLICK ON THE PLUS SIGN TO ADD TO LIST.";
              }else{
                $(function () { //ready
                  toastr.info('Task not deleted');
                });

              }
              //alert('ben');
              // document.getElementById('TDs').innerHTML = "TO DO LIST IS EMPTY, PLEASE CLICK ON THE PLUS SIGN TO ADD TO LIST.";

            }
            





            function editItem() {
              $('#addTodo').modal('show');

              btnNew.innerHTML = 'EDIT';
              var li = this.parentNode;
              var item = li.getElementsByTagName("*");
              inItemText.value = item[1].innerHTML;
              lastUpdatedItemId = item[1].id;

              console.log(item);

            }


            // function store() {
            //   window.localStorage.myitems = inItemText.innerHTML;
            // }

            // function getValues(){
            //    var storedValues = window.localStorage.myitems;
            //    if (!storedValues) {

            //    }else{
            //     inItemText.innerHTML = storedValues;
            //    }

            // }
            // getValues();







