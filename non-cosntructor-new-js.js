class Vehicle{
    make = "Mercedes Benz";
    
    printVehicleMake = () =>{
      console.log("this is the vehicle make" + this.make);
    }
    
  }
  
  class Human extends Vehicle{
     gender = "Male";
  
    printGender = () => {
      console.log(this.gender)
    }
  }
  
  class Person extends Human{
    name = "Gilwell Muhati"
    gender = "Male";
    printMyName = () =>{
      console.log(this.name)
    }
  }
  
  const person = new Person();
  person.printMyName();
  person.printGender();
  person.printVehicleMake();
  
  
  