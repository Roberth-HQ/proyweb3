import {
    Activity,
    Clock3,
    ShieldCheck,
    Wrench,
} from "lucide-react";

const services = [
    {
        icon: Wrench,
        title: "Mantenimiento preventivo",
        text: "Programas diseñados para mantener cada equipo funcionando de forma segura y eficiente.",
    },
    {
        icon: Activity,
        title: "Monitoreo y diagnóstico",
        text: "Identificamos posibles problemas antes de que se conviertan en fallas.",
    },
    {
        icon: Clock3,
        title: "Atención 24/7",
        text: "Nuestro equipo está preparado para responder cuando más lo necesitas.",
    },
    {
        icon: ShieldCheck,
        title: "Seguridad",
        text: "Protocolos y procesos orientados a garantizar una operación confiable.",
    },
];

export default function Services() {
    return (
        <section
            id="servicios"
            className="section services-section"
        >
            <div className="container">

                <div className="services-layout">

                    <div>
                        <div className="section-label">
                            02 · Servicio
                        </div>

                        <h2 className="section-title">
                            El ascensor es
                            solo el comienzo.
                        </h2>

                        <p className="section-description">
                            Una buena instalación necesita
                            un servicio que la acompañe durante
                            toda su vida útil.
                        </p>

                        <a
                            href="#contacto"
                            className="btn btn-primary services-button"
                        >
                            Hablar con un especialista
                        </a>
                    </div>

                    <div className="services-grid">
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    className="service-item"
                                    key={service.title}
                                >
                                    <div className="service-icon">
                                        <Icon size={23} />
                                    </div>

                                    <div>
                                        <h3>
                                            {service.title}
                                        </h3>

                                        <p>
                                            {service.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}