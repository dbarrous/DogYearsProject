// Animal Class
class Animal {
  constructor(species, personAge, algorithm) {
    this.species = species;
    this.personAge = personAge;
    this.algorithmArray = algorithm;
  }

  generateDescription() {
    return `How old in ${this.species} Years?`;
  }

  calculateAge() {
    switch (this.algorithmArray[0]) {
      case 0:
        return this.animalAge = this.personAge * this.algorithmArray[1];
        break;
      case 1:
        if (this.personAge <= 1) {
          this.animalAge = this.algorithmArray[1] * this.personAge;
        } else if (this.personAge > 1) {
          this.animalAge = this.algorithmArray[1];
          this.animalAge += ((this.personAge-1) * this.algorithmArray[2]);
        }
        return this.animalAge;
        break;
      case 2:
        if (this.personAge <= 2) {
          this.animalAge = this.algorithmArray[1] * this.personAge;
        } else if (this.personAge > 2) {
          this.animalAge = (this.algorithmArray[1] * 2);
           this.animalAge += ((this.personAge-2) * this.algorithmArray[2]);
        }
        return this.animalAge;
        break;
      default:
      return alert("Error");
      break;

    }

  }
}
