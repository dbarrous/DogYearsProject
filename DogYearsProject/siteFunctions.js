function updateAge() {

  let temp = document.getElementById('age').value;
  if (temp >= 0) {
    age = document.getElementById('age').value;
  } else {
    alert("Enter a valid age!");
  }
  animalObject.personAge = age;

  animalObject.calculateAge();

  createAgeElement(animalObject);

}





function next() {
  let temp = animals.shift();
  const object = new Animal(temp, age, animalAlgos[temp]);
  object.calculateAge();
  console.log(object);
  document.getElementById('title').innerHTML = object.generateDescription();
  createAgeElement(object);
  updateColor();
  animalObject = object;
  animals.push(temp);

  console.log(animals);
}


function unHide() {
  let ageForm = document.querySelector("#ageForm");

  ageForm.style.display = "block";
}

function back() {

    let temp = animals.pop();
    if(temp == animals[0]){
      back();

    }else{
    const object = new Animal(temp, age, animalAlgos[temp]);
    object.calculateAge();
    console.log(temp);
    document.getElementById('title').innerHTML = object.generateDescription();
    createAgeElement(object);
    updateColor();
    animalObject = object;
    animals.unshift(temp);

}

  console.log(animals);




}

function updateColor() {
  backgroundColor = colorArray.shift();
  resultColor = colorArray.shift();
  document.body.style.backgroundColor = backgroundColor;
  document.getElementById('ageResult').style.backgroundColor = resultColor;
  colorArray.push(backgroundColor);
  colorArray.push(resultColor);

}

function createAgeElement(animalObject) {
  if (document.getElementById('ageResult') == null) {
    let para = document.createElement("p");
    let node = document.createTextNode(animalObject.species + " Years: " + animalObject.animalAge);
    para.appendChild(node);
    para.setAttribute("id", "ageResult");
    document.body.appendChild(para);
  } else if (!(isNaN(animalObject.animalAge))) {
    element = document.getElementById('ageResult');
    document.body.removeChild(element);
    createAgeElement(animalObject);
  } else {}

}
