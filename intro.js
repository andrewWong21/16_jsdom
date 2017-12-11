var theButton = document.getElementById('b');
var fibButton = document.getElementById('fibB');
var seqButton = document.getElementById('seqB');
var heading = document.getElementById('h');
var list = document.getElementById('thelist');
var listItem = list.getElementsByTagName('li');
var fibList = document.getElementById('fib');
var fibItem = fibList.getElementsByTagName('li');
var seqList = document.getElementById('seq');
var seqItem = seqList.getElementsByTagName('li');

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
};

var seq = function(n) {
    return (n * (n+1))/2;
};

var nextSeq = function(e) {
    var seqNum = document.createElement('li');
    seqNum.innerHTML = seq(seqItem.length+1);
    seqList.appendChild(seqNum);
};

theButton.addEventListener('click', addElement);
fibButton.addEventListener('click', nextFib);
seqButton.addEventListener('click', nextSeq);

for (var i=0;i<listItem.length;i++){
    listItem[i].addEventListener('mouseover', changeHeading);
    listItem[i].addEventListener('mouseout', revertHeading);
    listItem[i].addEventListener('click', rmItem);
};
