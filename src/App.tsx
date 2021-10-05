import React from "react";
import Greeter from "@/components/Greeter";

const App: React.FC = () => {
    return (
        <div>
            <p>React Typescript Template</p>
            <Greeter initialCounter={0} initialName={"world"} />
        </div>
    )
}

export default App;