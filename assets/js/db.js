// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)



if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}


// Let us open our database
var request = window.indexedDB.open("MyTodo", 1),
db,
tx,
store,
index;

request.onupgradeneeded = function(event){
	let db = request.result,
	store = db.createObjectStore("MyTodoId", {
		keyPath: "qID"
	}),
	//store = db.createObjectStore("MyTodoList",{ autoIncrement:true })
	index = store.createIndex("MyTodoList","MyTodoList",{unique:false});
};

request.onerror = function(event) {
  console.log("there was an error " + event.target.errorCode);
};
request.onsuccess = function(event) {
  db = request.result;
  tx = db.transaction("MyTodoId","readwrite");
  store = tx.objectStore("MyTodoId");
  index = store.index("MyTodoList");

  db.onerror = function(event){
  	console.log("ERROR" + e.target.errorCode);
  }

  store.put({
  	qID:1,MyTodoList:"how are you",correctAnswer: true, studentAnswer: true, result:true
  });

  let q1 = store.get(1);
  let qs = index.get("how are you");
  let q1 = store.get(2);
  let qs = index.get("benjamin quiz");

  // q1.onsuccess = function(){
  // 	console.log(q1.result);
  // 	console.log(q1.result.MyTodoList);
  // };
  // qs.onsuccess = function(){
  // 	console.log(qs.result.MyTodoList);
  // };

  tx.oncomplete = function(){
  	db.close();
  };

}
