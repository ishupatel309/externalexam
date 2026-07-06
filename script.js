function calculateSI(){

let P=document.getElementById("principal").value;

let R=document.getElementById("rate").value;

let N=document.getElementById("time").value;

if(P=="" || R=="" || N==""){

alert("Please Enter All Fields");

return;

}

let SI=(P*R*N)/100;

document.getElementById("result").innerHTML="Simple Interest = Rs. " + SI.toFixed(2);
}