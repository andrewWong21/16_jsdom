var theButton = document.getElementById('b');
var heading = document.getElementById('h');
var list = document.getElementById('thelist');
var listItem = document.getElementsByTagName('li');

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

theButton.addEventListener('click', addElement);

for (var i=0;i<listItem.length;i++){
    listItem[i].addEventListener('mouseover', changeHeading);
    listItem[i].addEventListener('mouseout', revertHeading);
    listItem[i].addEventListener('click', rmItem);
};