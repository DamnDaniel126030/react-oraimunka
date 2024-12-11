import { useState } from "react";

const LessonForm = ( { onOraHozzaad }) => {
    const [cim, setCim] = useState("");
    const [leiras, setLeiras] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();
        
        const ujOra = {
            cim,
            leiras
            };
            
        onOraHozzaad(ujOra)
        setCim("");
        setLeiras("");
    }

    return (
        <form action="#" onSubmit={handleFormSubmit}>
            <div className="col">
                <input type="text" placeholder="Cím" value={cim} onChange={(e) => setCim(e.target.value)}/>
                <textarea placeholder="Leírás" rows={5} value={leiras} onChange={(e) => setLeiras(e.target.value)}></textarea>
            </div>
            <aside className="col">
                <button className="btn">Hozzáadás</button>
                <button className="btn outline">Mégsem</button>
            </aside>
        </form>
    )
};

export default LessonForm;