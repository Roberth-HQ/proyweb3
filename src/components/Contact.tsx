import {
    Mail,
    MapPin,
    Phone,
    ArrowRight,
} from "lucide-react";

import { siteConfig } from "../config/site";


export default function Contact() {
    return (
        <section
            id="contacto"
            className="section contact-section"
        >
            <div className="container contact-layout">

                <div>
                    <div className="section-label">
                        05 · Contacto
                    </div>

                    <h2 className="section-title">
                        Hablemos de tu
                        <span className="gradient-text">
                            {" "}próximo proyecto.
                        </span>
                    </h2>

                    <p className="section-description">
                        Cuéntanos qué necesitas y nuestro equipo
                        se pondrá en contacto contigo.
                    </p>

                    <div className="contact-info">

                        <div>
                            <Phone />
                            <span>
                                {siteConfig.phone}
                            </span>
                        </div>

                        <div>
                            <Mail />
                            <span>
                                {siteConfig.email}
                            </span>
                        </div>

                        <div>
                            <MapPin />
                            <span>
                                Bolivia
                            </span>
                        </div>

                    </div>
                </div>

                <form className="contact-form">

                    <div className="form-row">
                        <input
                            type="text"
                            placeholder="Nombre"
                        />

                        <input
                            type="email"
                            placeholder="Correo electrónico"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Empresa"
                    />

                    <textarea
                        rows={6}
                        placeholder="¿En qué podemos ayudarte?"
                    />

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Enviar consulta
                        <ArrowRight size={18} />
                    </button>

                </form>

            </div>
        </section>
    );
}