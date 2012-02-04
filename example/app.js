var TiUIwrapper = require('TiUIwrapper');

var test = new TiUIwrapper.createLabel({text: 'YAY!!!'});

// To directly edit a property of the element after creation… (fixing this soon)
test.TiElement.backgroundColor = 'blue';

test.addEventListener('click', function() {
    alert('YAY!!!!');
});

test.prototype.laugh = function() {
alert('hahaha');
};

test.addEventListener('click', function() {
    test.laugh();
});

// No custom properties in here (yet, but it will come...) 
var win = new TiUIwrapper.createWindow({
    title:'Test',
    backgroundColor:'#fff',
    barColor:'#000'
});

win.add(test);


win.open();