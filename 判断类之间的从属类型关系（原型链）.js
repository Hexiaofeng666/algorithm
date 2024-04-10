function isSubclassOf(instance, construtor) {
  let proto = instance.prototype;
  while (proto) {
    if (proto === construtor.prototype) {
      return true;
    } else {
    //   proto = Object.getPrototypeOf(proto);
    proto = proto.__proto__;
    }
  }
  return false;
}
class Animal {}
class Dog extends Animal {}
class Jinmao extends Dog {}
class Cat {}

console.log(isSubclassOf(Jinmao, Animal)); // true
console.log(isSubclassOf(Cat, Animal)); // false
