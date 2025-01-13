import React, { useEffect, useState } from "react";

export function RefreshTheme() {
    var theme = localStorage.getItem("theme");
    if (theme == null || theme == "null") {
        theme = "BlueBronze";
    }
    console.log(theme);

    const linkId = "theme-link";
    let link = document.getElementById(linkId);

    if (!link) {
        link = document.createElement("link");
        link.id = linkId;
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }

    link.href = `/styles/themes/${theme}.css`;
}

export default function Themes() {
    const [selectedTheme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        if (selectedTheme != null) {
            localStorage.setItem("theme", selectedTheme);
        }
        else {
            localStorage.removeItem("theme");
        }
        RefreshTheme();
    }, [selectedTheme]);

    return (
        <>
            <h1>Themes</h1>
            <form className="inset-box">
                <div className="input-box row">
                    <div className="col">
                        <label htmlFor="blue-bronze">Blue/Bronze</label>
                        <input type="radio" name="blue-bronze" value="BlueBronze" checked={selectedTheme === "BlueBronze"} onChange={() => setTheme("BlueBronze")} />
                    </div>
                    <div className="col">
                        <label htmlFor="blue">Blue</label>
                        <input type="radio" name="blue" value="Blue" checked={selectedTheme === "Blue"} onChange={() => setTheme("Blue")} />
                    </div>
                    <div className="col">
                        <label htmlFor="green-orange">Green/Orange</label>
                        <input type="radio" name="green-orange" value="GreenOrange" checked={selectedTheme === "GreenOrange"} onChange={() => setTheme("GreenOrange")} />
                    </div>
                    <div className="col">
                        <label htmlFor="red-gold">Red/Gold</label>
                        <input type="radio" name="red-gold" value="RedGold" checked={selectedTheme === "RedGold"} onChange={() => setTheme("RedGold")} />
                    </div>
                    <div className="col">
                        <label htmlFor="dark">Dark</label>
                        <input type="radio" name="dark" value="Dark" checked={selectedTheme === "Dark"} onChange={() => setTheme("Dark")} />
                    </div>
                </div>
            </form>
        </>
    );
}