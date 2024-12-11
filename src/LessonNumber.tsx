import { useState } from "react";

const LessonNumber = (props) => {
    const [teljesOraszam, setTeljesOraszam] = useState(32);
    return (
        <>
            <section className="row">
                <div className="text-lg">Teljes óraszám:</div>
                <div className="row" style={{gap: "0.5rem"}}>
                    <button className="icon-button" onClick={() => setTeljesOraszam(prev => prev + 1)}>+</button>
                    <span className="font-semibold">{teljesOraszam - props.orakATanmenetben}</span>
                    <button className="icon-button" onClick={() => setTeljesOraszam(prev => prev - 1)}>-</button>
                </div>
            </section>
            <section className="row">
                <div className="text-lg">Hiányzó órák:</div>
                <span className="font-semibold">{teljesOraszam - props.orakATanmenetben}</span>
            </section>
        </>
    );
};

export default LessonNumber;
