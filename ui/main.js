console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = "New value";

var img = document.getElementById('madi');
    alert(img);
img.onClick = function(){
    alert("dd");
    img.style.marginLeft = '100px';   
};