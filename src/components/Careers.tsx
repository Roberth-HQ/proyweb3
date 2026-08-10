import {
    ArrowRight,
    Users,
} from "lucide-react";

export default function Careers() {
    return (
        <section
            id="empleo"
            className="section careers-section"
        >
            <div className="container">

                <div className="careers-card">

                    <div className="careers-icon">
                        <Users size={30} />
                    </div>

                    <div>
                        <div className="section-label">
                            04 · Empleo
                        </div>

                        <h2>
                            Crece con nosotros.
                        </h2>

                        <p>
                            Buscamos personas apasionadas por
                            la tecnología, la ingeniería y el
                            servicio.
                        </p>
                    </div>

                    <a
                        href="#contacto"
                        className="btn btn-primary"
                    >
                        Ver oportunidades
                        <ArrowRight size={18} />
                    </a>

                </div>

            </div>
        </section>
    );
}