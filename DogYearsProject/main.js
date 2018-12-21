let ageInHuman = 0;
let ageInDog = 0;

function calc() {
  age = document.getElementById('age').value;
  if(age >= 0 && !isNaN(age)){
    createAge(yearInDog(age));
  }else{
    alert("Enter a valid age!");
  }
}

function yearInDog(humanAge) {

    if (humanAge >= 0) {
      ageInHuman = humanAge;
      if (humanAge < 2) {
        ageInDog = ageInHuman * 10.5;
        return ageInDog;
      } else {
        ageInDog = ((ageInHuman - 2) * 4) + 21;
        return ageInDog;
      }
}
}

function createAge(x) {
  if (document.getElementById('ageResult') == null) {
    let para = document.createElement("p");
    let node = document.createTextNode("Dog Years: " + x);
    para.appendChild(node);
    para.setAttribute("id", "ageResult");
    document.body.appendChild(para);
  } else if(document.getElementById('ageResult') != undefined){
    element = document.getElementById('ageResult');
    document.body.removeChild(element);
    createAge(x);
  }else{}

}
