// Sker direkt när HTML laddar
window.onload = function () {
  // Vid bokning av bastu eller bana, gör detta så man inte kan välja ett datum bakåt i tiden
  let date = new Date();
  let minDate = new Date(date.getFullYear(), date.getMonth()+1,date.getDate());
  let minDateStr = "" + minDate.getFullYear() + "-" + minDate.getMonth() + "-" + minDate.getDate();
  let minimumDatum = document.getElementById("datum");  
  if (minimumDatum) {
    minimumDatum.setAttribute("min", minDateStr);
  }  
}

function resizeFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } 
  else {
    x.className = "topnav";
  }
}

function validering () {
  // variabel för om validering funkar
  let valid = 0;

  // Validering för förnamn och efternamn
  const namn=document.querySelectorAll(".namn");
  namn.forEach(element => {
    let text=element.value;
    for (let i = 0; i < text.length; i++) {
      let thisLetter=text[i];
      let thisLetterChar=thisLetter.charCodeAt(0);
      // Listar otillåtnatecken med hjälp av tidigare charCode.
      if (thisLetterChar > 32   && (thisLetterChar < 45  || 
        thisLetterChar > 45 ) && (thisLetterChar < 65  || 
        thisLetterChar > 90 ) && (thisLetterChar < 97  ||
        thisLetterChar > 122) && (thisLetterChar < 196 ||
        thisLetterChar > 197) && (thisLetterChar < 227 ||
        thisLetterChar > 230) && (thisLetterChar < 214 ||
        thisLetterChar > 214) && (thisLetterChar < 246 || 
        thisLetterChar > 246)) {
          alert("Otillåtna tecken i något av namnen");
          valid++;
          break;        
      }
      
    }
    });

  // Validering för mobilnummer
  const mobil=document.querySelector("#mobil");
  let numbers = mobil.value;
  for (let i = 0; i < numbers.length; i++) {
    const thisNumber = numbers[i];
    let thisNumberChar = thisNumber.charCodeAt(0);
    // Tillåter endast siffror
    if (thisNumberChar < 48 || thisNumberChar > 57) {
        alert("Otillåtna tecken i mobilnummer");
        valid++;
        break;
    }
    
  }

  // Om allt går genom validering, byt titlarna och dölj formulär så man ser att det har "registrerat"
  if (valid==0) {
    document.getElementById("myForm").style.display="none";
    document.getElementById("titel1").style.display="none";
    document.getElementById("titel2").style.visibility="visible";
  }
  
}