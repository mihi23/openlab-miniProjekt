function calculateTip() {
    
  if (money === "" || service == 0) {
    alert("Nezadali ste hodnoty");
  }

  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  
    var money = document.getElementById("money").value;
    var service = document.getElementById("service").value;
    var numPeople = document.getElementById("numPeople").value;
     
    var total = (money * service) / numPeople;
    total = Math.round(total * 100) / 100;
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  
  document.getElementById("calc").onclick = function() {
    calculateTip();
  
  };