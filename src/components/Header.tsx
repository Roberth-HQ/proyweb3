import { useState } from "react";
import {
    MapPin,
    Menu,
    Phone,
    X,
} from "lucide-react";

import { siteConfig } from "../config/site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="topbar">
                <div className="container topbar-inner">
                    <div className="topbar-info">
                        <span>
                            <MapPin size={14} />
                            {siteConfig.location}
                        </span>

                        <a href={`tel:${siteConfig.phone}`}>
                            <Phone size={14} />
                            {siteConfig.phone}
                        </a>
                    </div>

                    <a href="#clientes" className="client-access">
                        Acceso a clientes
                    </a>
                </div>
            </div>

            <div className="navbar">
                <div className="container navbar-inner">

                    <a href="#" className="logo">
                        <div className="logo-symbol">
                            V
                        </div>

                        <div>
                            <strong>VERTICAL</strong>
                            <span>ASCENSORES</span>
                        </div>
                    </a>

                    <nav className={`nav ${menuOpen ? "open" : ""}`}>
                        {siteConfig.navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="navbar-actions">
                        <ThemeToggle />

                        <button
                            className="menu-button"
                            onClick={() =>
                                setMenuOpen(!menuOpen)
                            }
                            aria-label="Abrir menú"
                        >
                            {menuOpen ? (
                                <X />
                            ) : (
                                <Menu />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}