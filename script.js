function calculateBridePrice() { 
    var price = 500;

    var education = document.getElementById("education").value;  
        if(education != "blank" ){
            price *= parseFloat(education);
            document.getElementById("education").style.backgroundColor = "white";
        }
        else {
            document.getElementById("education").style.backgroundColor = "blue"; //css manipulation
            document.getElementById("dropdown").append("You forgot to choose Education. "); //html manipulation
        }
        
    var familyNetWorth = document.getElementById("networth").value;
    if(familyNetWorth != "blank" ){
        price *= parseFloat(familyNetWorth);
        document.getElementById("networth").style.backgroundColor = "white";
    }
    else {
        document.getElementById("networth").style.backgroundColor = "blue";  
        document.getElementById("dropdown2").append("You forgot to choose Networth. ")
    }
    
    var skills = document.querySelectorAll("#skills input:checked"); 
      skills.forEach( skill => {
          price += parseFloat(skill.value) ;
         
    })
  
    var ages = document.getElementsByName('age');
    ages.forEach( age => {
        if (age.checked){
            price *= parseFloat(age.value);
        }
        
  })
    var gossips = document.querySelectorAll("#gossip input:checked");
    gossips.forEach( gossip => {
        if(gossip.value != '200'){ 
            price *= parseFloat(gossip.value) ;
        }
        else{
            price -= parseFloat(gossip.value) ;
        }
  })

      document.getElementById("priceTotal").innerHTML =  Math.round(price)+ '$'; //dom manipulation html
  
    }

  document.getElementById("submit").onclick = function() { 
    calculateBridePrice();
  
  };