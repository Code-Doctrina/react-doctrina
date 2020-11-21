class Vehicle{
  constructor(){
    this.make = "Mercedes Benz";
  }
  
  printVehicleMake(){
    console.log("this is the vehicle make" + this.make);
  }
  
}

class Human extends Vehicle{
  constructor(){
    super()
    this.gender = "Male";
  }
  printGender(){
    console.log(this.gender)
  }
}

class Person extends Human{
  constructor(){
    super()
    this.name = "Gilwell Muhati"
  }
  
  printMyName(){
    console.log(this.name)
  }
}

const person = new Person();
person.printMyName();
person.printGender();
person.printVehicleMake();
