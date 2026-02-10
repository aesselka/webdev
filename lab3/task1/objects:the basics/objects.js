let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  
  alert( obj.for + obj.let + obj.return );
  let userr = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in userr) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( userr[key] ); // John, 30, true
  }
  let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    alert(+code); // 1, 41, 44, 49
  }
  //tasks
  let user = {
    name : 'John',
    surname : 'smith'
  };
  user.surname = 'Pete';
  delete user.name;

  let isEmpty = function(obj) {
    return Object.keys(obj).length == 0;
};
  let schedule = {};
  alert( isEmpty(schedule) );
  schedule["8:30"] = "get up";

  alert( isEmpty(schedule));

    let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }
    let sum=0;
    for(let key in salaries){
        sum+=salaries[key];
    }
    alert(sum);

    let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };
    function multiplyNumeric(obj){
        for(let key in obj){
            if(typeof obj[key] == 'numeric'){
                obj[key] *=2;
            }
        }
    }

