import Greeter from "./greeter";

const print = console.log;

const app = () => {
    const greeter = new Greeter();

    print(greeter.sayHello());
    print(greeter.sayHello("world"));
    print(`count: ${greeter.getCount()}`)
}

app();
