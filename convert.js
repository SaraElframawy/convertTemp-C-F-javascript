document.getElementById("submitbutton").onclick = function(){
    let temp;
    if(document.getElementById("cButton").checked){
       temp= document.getElementById("textBox").value;
       temp = Number(temp);
       temp =tocelius(temp);
      document.getElementById("templabel").innerHTML = temp+"°C";



    }else if(document.getElementById("fButton").checked){
        temp= document.getElementById("textBox").value;
        temp = Number(temp);
        temp = tofehenhet(temp);
        document.getElementById("templabel").innerHTML = temp +"°F";

    }else{
        document.getElementById("templabel").innerHTML ="select unit";

    }

}


function tocelius(temp){
    return (temp -32)* 5/9;
}
function tofehenhet(temp){
    return (temp * 9/5 +32);
}