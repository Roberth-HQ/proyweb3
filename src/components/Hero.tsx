import { motion } from "motion/react";
import {
    ArrowRight,
    ChevronDown,
    MoveUp,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-grid" />

            <div className="container hero-container">

                <motion.div
                    className="hero-content"
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    <div className="hero-badge">
                        <span className="status-dot" />
                        Ingeniería · Tecnología · Seguridad
                    </div>

                    <h1>
                        Elevamos
                        <span className="gradient-text">
                            {" "}la experiencia
                        </span>
                        <br />
                        de moverse.
                    </h1>

                    <p>
                        Diseñamos, instalamos y mantenemos
                        soluciones de movilidad vertical para
                        edificios que miran hacia el futuro.
                    </p>

                    <div className="hero-actions">
                        <a
                            href="#contacto"
                            className="btn btn-primary"
                        >
                            Solicitar asesoría
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="#productos"
                            className="btn btn-secondary"
                        >
                            Explorar soluciones
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div>
                            <strong>24/7</strong>
                            <span>Soporte</span>
                        </div>

                        <div>
                            <strong>+15</strong>
                            <span>Años de experiencia</span>
                        </div>

                        <div>
                            <strong>100%</strong>
                            <span>Seguridad</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <div className="elevator-orbit orbit-1" />
                    <div className="elevator-orbit orbit-2" />

                    <div className="elevator">
                        <div className="elevator-cables">
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className="elevator-shaft">
                            <div className="elevator-cabin">
                                <div className="cabin-light" />

                                <div className="cabin-panel">
                                    <MoveUp size={20} />
                                    <span>07</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="floating-card card-top">
                        <span>Estado</span>
                        <strong>Operativo</strong>
                    </div>

                    <div className="floating-card card-bottom">
                        <span>Precisión</span>
                        <strong>± 1 mm</strong>
                    </div>
                </motion.div>
            </div>

            <a
                href="#productos"
                className="scroll-indicator"
            >
                <span>Descubre más</span>
                <ChevronDown size={18} />
            </a>
        </section>
    );
}