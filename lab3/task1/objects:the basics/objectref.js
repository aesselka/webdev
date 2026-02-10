let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); 
/**Object.assign(dest, ...sources)
 * The first argument dest is a target object.
Further arguments is a list of source objects.
 */
let us = { name: "John" };

Object.assign(us, { name: "Pete" });

alert(us.name);

let ser = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
let clone = Object.assign({}, ser);
alert( ser.sizes === clone.sizes);
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width);
//structeredClone
let s = {};
s.me = s;
let clonee = structuredClone(s);
alert(clonee.me === clonee)