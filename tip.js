function calculate(){
    var billamt = document.getElementById("billamt").value;
    var service = document.getElementById("service").value;
    var noOf = document.getElementById("noOf").value;
    
    if(billamt === "" || service === 0 || noOf === 0){
        alert("Please enter the values...");
        return;
    }else{
        var total = (billamt * service) / noOf;
        document.getElementById("output").style.display = "block";
        document.getElementById("amt").innerHTML = total;
    }
}

document.getElementById("output").style.display = "none";
document.getElementById("calculate").onclick = function(){
    calculate();
};