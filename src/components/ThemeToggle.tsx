import { useEffect, useState } from "react";
import {
    Moon,
    Sun,
} from "lucide-react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        return (
            localStorage.getItem("theme") === "dark"
        );
    });

    useEffect(() => {
        document.documentElement.dataset.theme =
            dark ? "dark" : "light";

        localStorage.setItem(
            "theme",
            dark ? "dark" : "light"
        );
    }, [dark]);

    return (
        <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Cambiar tema"
        >
            {dark ? (
                <Sun size={18} />
            ) : (
                <Moon size={18} />
            )}
        </button>
    );
}