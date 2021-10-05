import Greeter from "./greeter";

const print = (text: string): void => {
    console.log(text);
}

const app = (): void => {
    const greeter = new Greeter();

    print(greeter.sayHello());
    print(greeter.sayHello("world"));
    print(`count: ${greeter.getCount()}`)
}

app();
