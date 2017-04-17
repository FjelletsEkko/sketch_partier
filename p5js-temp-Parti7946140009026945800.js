function Parti(navn, logo, start, environment, tax) {
  this.navn = navn;
  this.logo = logo;
  this.position = start;
  this.envImportance = environment;
  this.taxImportance = tax;
  
  this.display = function() {
    imageMode(CENTER);
    image(this.logo, this.position, 200, 20, 20)
  }
  
  this.updatePos = function(target) {
    if (target == 'env' && this.position != this.envImportance) {
      if (this.position < this.envImportance) {
        this.position += 2;
      } else {
        this.position -= 2;
      }
    } else if (target == 'tax' && this.position != this.taxImportance) {
      if (this.position < this.taxImportance) {
        this.position += 2;
      } else {
        this.position -= 2;
      }
    }
  }
}