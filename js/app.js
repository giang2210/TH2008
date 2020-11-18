var colors = ["orange","red","green", "blue", "pink", "violet"];
var i = 0;
function click1(e){
    var box = document.getElementById("box");
    i++;
    box.style.backgroundColor=colors[i%6];
}
function hover1(e){ // nguoi dung dua chuot vao trong pham vi cua khoi  se chuyen mau
    //var box = document.getElementById("box");
    e.style.backgroundColor ="black";
}
function hover2(e){ // nguoi dung dua chuot vao trong pham vi cua khoi  se chuyen mau
    //var box = document.getElementById("box");
    e.style.backgroundColor ="orange";
}
// this la doi tuong ngam dinh nam ben trong khai bao cua no.
function key1(e){
    var v = e.value;
   // console.log(v);
    var k = event.keyCode;
    console.log(k);
}
function key2(e){
    var v = e.value;
    //console.log(v);
}
function key3(e){
    var v = e.value;
   // console.log(v);
}
function change1(e){
     var v=e.value;
     console.log(v);
}