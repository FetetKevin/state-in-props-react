import { useState } from "react";
import Count from "./components/Count";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="count-block">
            <button className="left-btn" onClick={() => setCount(count + 1)}>
                +
            </button>
            <Count number={count} />
            <button className="right-btn" onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    );
}
