let message = "Hello from myModule";

function sayHello() {
  console.log(message);
}
export { sayHello as sayHi };

export default message;