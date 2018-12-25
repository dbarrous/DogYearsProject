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

function updatePic(animalName){
  document.getElementById('picture').src = `pics/${animalName}.png`;
}



function next() {
    if(counter == 0){
      let temp1 = animals.shift();
      animals.push(temp1);
    }

    let temp = animals.shift();
    const object = new Animal(temp, age, animalAlgos[temp]);
    object.calculateAge();
    console.log(object);
    document.getElementById('title').innerHTML = object.generateDescription();
    createAgeElement(object);
    updateColor();
    updatePic(temp);
    animalObject = object;
    animals.push(temp);
    console.log(animals);
    counter = 1;

}


function unHide() {
  let ageForm = document.querySelector("#ageForm");

  ageForm.style.display = "block";
}

function back() {
      if(counter == 1){
        let temp1 = animals.pop();
        animals.unshift(temp1);

      }
      let temp = animals.pop();
      const object = new Animal(temp, age, animalAlgos[temp]);
      object.calculateAge();
      console.log(temp);
      document.getElementById('title').innerHTML = object.generateDescription();
      createAgeElement(object);
      updatePic(temp);
      updateColor();
      animalObject = object;
      animals.unshift(temp);
      counter = 0;


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

    body.appendChild(para);
  } else if (!(isNaN(animalObject.animalAge))) {
    element = document.getElementById('ageResult');
    body.removeChild(element);
    createAgeElement(animalObject);
  } else {}

}
