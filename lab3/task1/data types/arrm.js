function camelize(str) {
    return str
      .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }
  
  function filterRange(arr, arg1, arg2){
      return arr.filter(item=>(arg1<=item && arg2<=item));
  }
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  alert( filtered ); // 3,1 (совпадающие значения)
  alert( arr ); 
  
  function filterRangeInPlace(arr, a, b) {
  
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  let arr1 = [5, 3, 8, 1];
  filterRangeInPlace(arr1, 1, 4); 
  alert( arr1 );
  
  let arr2 = [1, 2, 3, 4, 5];
  arr2.sort((a, b) => b - a);
  alert( arr2 );
  
  function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr3 = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr3);
  
  alert( sorted );
  alert( arr3 );
  
  function Calculator() {
      this.method={
          "+": (a, b)=>a+b,
          "-":(a, b)=>a-b
      };
      this.calculator=function(arr){
          let [a, op, b]=str.split(' ');
          a+=a;
          b+=b;
  
          if(!this.method[op] || isNaN(a) || isNaN(b)){
              return NaN;
          }
          return this.method[op](a,b);
      }
      this.addMethod=function(name, func){
          this.method[name]=func;
      };
  }
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };
  let users = [ vasya, petya, masha ];
  let names = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }))
  alert( names );
  
  function sortByAge(users) {
      return users.sort((a, b) => a.age - b.age);
  }
  sortByAge(users);
  alert(users[0].name); // Вася
  alert(users[1].name); // Маша
  alert(users[2].name); 
  
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr4 = [1, 2, 3];
  shuffle(arr4);
  alert(arr4);
  
  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  alert( getAverageAge(users) );
  
  function unique(arr) {
      let res=[];
    for(let str of arr){
      if(!res.includes(str)){
          res.push(str);
      }
    }
    return res;
  }
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  alert( unique(strings) ); 
  
  function groupById(arr){
      return arr.reduce((obj, value)=>{obj[value.id]=value; return obj}, {})
  }