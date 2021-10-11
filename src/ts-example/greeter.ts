export default class Greeter {
    // Using class properties with Babel version prior to 7.14 will case "SyntaxError: Missing class properties transform.".
    // Can be fixed with installing @babel/plugin-proposal-class-properties and adding to babel config plugins.
    //
    // Starting from Babel 7.14 @babel/plugin-proposal-class-properties and @babel/plugin-proposal-private-methods
    // plugins which were included to use the class features are now enabled by default in @babel/preset-env.
    // https://blog.saeloun.com/2021/06/24/babel-enables-class-field-and-private-methods.html
    private static readonly DEFAULT_NAME = "stranger";

    private count = 0;

    sayHello = (name: string = Greeter.DEFAULT_NAME ) : string => {
        this.count++;
        return `Hello ${name}!`;
    }

    getCount = (): number => this.count;

}