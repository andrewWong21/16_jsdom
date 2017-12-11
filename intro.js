var addElement = function(e) {
    var c = document.getElementById('thelist');
    c.appendChild(document.createElement('li'));
};

var b = document.getElementById('b');
b.addEventListener('click', addElement);

var changeHeading = function(e) {
    var heading = document.getElementById('h');
    heading.innerHTML = this.innerHTML;
};

var revertHeading = function(e) {
    var heading = document.getElementById('h');
    heading.innerHTML = 'Hello World!';
};

var rmItem = function(e) {    
    this.remove();
};

var d = document.getElementsByTagName('li');
for (var i=0;i<d.length;i++){
    d[i].addEventListener('mouseover', changeHeading);
    d[i].addEventListener('mouseout', revertHeading);
    d[i].addEventListener('click', rmItem);
};
