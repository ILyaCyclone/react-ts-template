import React, {useEffect, useState} from "react";

interface Props {
    initialName?: string
    initialCounter?: number
}

const Greeter: React.FC<Props> = ({initialName, initialCounter = 0}) => {
    const [name, setName] = useState<string>(initialName || "");
    const [greeting, setGreeting] = useState<string>();
    const [counter, setCounter] = useState<number>(initialCounter);

    useEffect(() => {
        updateGreeting()
    }, []);

    const updateName = (e: React.ChangeEvent<HTMLInputElement>): void => setName(e.target.value);

    const updateGreeting = (): void => setGreeting(name ? `Hello ${name}` : "");

    const greet = (): void => {
        setCounter(counter + 1);
        updateGreeting();
    }

    return (
        <div>
            <input className={"name-input"} value={name} onChange={updateName} type="text"/>
            <button className={"greet-btn"} onClick={greet}>Greet</button>
            <p className={"greeting"}>{greeting}</p>
            <p>Called <b className={"count"}>{counter}</b> times</p>
        </div>
    )
}

export default Greeter;