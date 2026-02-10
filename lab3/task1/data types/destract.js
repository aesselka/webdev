let user = {
    name: "John",
    years: 30
  };
  let {name, years: age, isAdmin=false} = user;
  alert( name ); // John
  alert( age ); // 30
  alert( isAdmin ); // false
  
  function topSalary(salaries){
      let max=0;
      let maxName=null;
      for(const [name, salary] of Object.entries(salaries)){
          if(salary>max){
              max=salary;
              maxName=name;
          }
      }
      return maxName;
  }
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };