let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  let readMessege=new WeakSet();
  readMessege.add(messages[0]);
  readMessege.add(messages[1]);
  alert("Read message 0: " + readMessages.has(messages[0])); // true
  messages.shift();
  
  let whatMessege=new WeakMap();
  whatMessege.set(messages[0], new Date(2017, 1, 1));