import React, { useState } from "react";
import Review from "./Review";

function App() {
    let [page, changePage] = useState(0);
    return (
        <main>
            <div>
                <h2>our reviews</h2>
                <div className="underline"></div>
            </div>
            <Review page={page} changePage={changePage} />
        </main>
    );
}

export default App;
