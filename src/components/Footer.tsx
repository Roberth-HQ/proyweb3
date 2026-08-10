import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-main">

                    <div className="logo footer-logo">
                        <div className="logo-symbol">
                            V
                        </div>

                        <div>
                            <strong>VERTICAL</strong>
                            <span>ASCENSORES</span>
                        </div>
                    </div>

                    <p>
                        Movilidad vertical diseñada para
                        el futuro.
                    </p>

                    <div className="socials">
                        <a href="#">
                            <ArrowUpRight size={18} />
                        </a>

                        <a href="#">
                            <ArrowUpRight size={18} />
                        </a>
                    </div>

                </div>

                <div className="footer-bottom">

                    <span>
                        © {new Date().getFullYear()}
                        {" "}Vertical Ascensores.
                        Todos los derechos reservados.
                    </span>

                    <a href="#">
                        Volver arriba
                        <ArrowUp size={16} />
                    </a>

                </div>

            </div>
        </footer>
    );
}