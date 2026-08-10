import { CheckCircle2, Zap } from "lucide-react";

export default function About() {
    return (
        <section
            id="nosotros"
            className="section about-section"
        >
            <div className="container about-layout">

                <div className="about-visual">
                    <div className="about-circle">
                        <Zap size={55} />
                    </div>

                    <div className="about-line line-one" />
                    <div className="about-line line-two" />

                    <div className="about-label">
                        VERTICAL
                        <span>ENGINEERING</span>
                    </div>
                </div>

                <div className="about-content">

                    <div className="section-label">
                        03 · Nosotros
                    </div>

                    <h2 className="section-title">
                        Construimos confianza
                        <span className="gradient-text">
                            {" "}en cada nivel.
                        </span>
                    </h2>

                    <p className="section-description">
                        En Vertical Ascensores combinamos
                        ingeniería, tecnología y servicio para
                        crear soluciones de movilidad vertical
                        confiables y preparadas para el futuro.
                    </p>

                    <div className="about-list">
                        <div>
                            <CheckCircle2 />
                            <span>
                                Tecnología y eficiencia
                            </span>
                        </div>

                        <div>
                            <CheckCircle2 />
                            <span>
                                Ingeniería especializada
                            </span>
                        </div>

                        <div>
                            <CheckCircle2 />
                            <span>
                                Servicio personalizado
                            </span>
                        </div>

                        <div>
                            <CheckCircle2 />
                            <span>
                                Compromiso con la seguridad
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}