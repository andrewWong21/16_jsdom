var theButton = document.getElementById('b');
var fibButton= document.getElementById('fibB');
var heading = document.getElementById('h');
var list = document.getElementById('thelist');
var fibList = document.getElementById('fib');
var listItem = document.getElementsByTagName('li');
var fibItem = fibList.getElementsByTagName('li');

var addElement = function(e) {
    var newListItem = document.createElement('li');
    newListItem.innerHTML = 'item ' + listItem.length;
    newListItem.addEventListener('mouseover', changeHeading);
    newListItem.addEventListener('mouseout', revertHeading);
    newListItem.addEventListener('click', rmItem);
    list.appendChild(newListItem);
};

var changeHeading = function(e) {
    heading.innerHTML = this.innerHTML;
};

var revertHeading = function(e) {
    heading.innerHTML = 'Hello World!';
};

var rmItem = function(e) {    
    this.remove();
};

var fib = function(n) {
    if (n == 0){
	return 0;
    }

    if (n == 1){
	return 1;
    }

    else {
	return fib(n - 2) + fib(n - 1);
    }    
}

var nextFib = function(e) {
    var fibNum = document.createElement('li');
    fibNum.innerHTML = fib(fibItem.length);
    fibList.appendChild(fibNum);
}    

theButton.addEventListener('click', addElement);
fibButton.addEventListener('click', nextFib);

for (var i=0;i<listItem.length;i++){
    listItem[i].addEventListener('mouseover', changeHeading);
    listItem[i].addEventListener('mouseout', revertHeading);
    listItem[i].addEventListener('click', rmItem);
};
