import { useState } from "react";

const USP = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="unique-selling-points">
            <button onClick={() => setActive(!active)}>Toggle USPs</button>

            { active &&
                <ul>
                    <li>There are no ints.</li>
                    <li>I spent too much time trying to understand the keyword 'this'. That is time I will never ever get back.</li>
                    <li>1 + "1" = 11.</li>
                </ul>
            }
        </div>
    )
}

export default USP;