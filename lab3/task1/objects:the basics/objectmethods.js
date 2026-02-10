function makeUser() {
    return {
      name: "John",
      ref: this,
    };
  }
  
  let us = makeUser();
  
  alert(us.ref.name);
  
  function makeUser() {
    return this; // this time there's no object literal
  }
  
  alert(makeUser().name); // Error: Cannot read property 'name' of undefined
  
  function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      },
    };
  }
  
  let user = makeUser();
  
  alert(user.ref().name); // John
  
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());
  
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert(this.step);
      return this;
    },
  };
  
  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
  
  function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function () {
      this.value += +prompt("How much to add?", 0);
    };
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);
  
  function Calculator() {
    this.read = function () {
      this.a = +prompt("a?", 0);
      this.b = +prompt("b?", 0);
    };
  
    this.sum = function () {
      return this.a + this.b;
    };
  
    this.mul = function () {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert("Sum=" + calculator.sum());
  alert("Mul=" + calculator.mul());
  
  
  let obj = {
      toString() {
        return "2";
      }
    };
    
    alert(obj * 2);