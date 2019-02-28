//onmouseover
document.getElementById('btn').onmouseover=changeOnMouseOver;
document.getElementById('btn').onmouseout=changeOnMouseOut;
function changeOnMouseOver() {
    var but=document.getElementById('btn');
    but.style.background="green";
};
function changeOnMouseOut() {
    var but=document.getElementById('btn');
    but.style.background="orange";
};
document.getElementById('btn').onclick=function() {
    alert("YOU HAVE CLICKED THE BUTTON");
}
