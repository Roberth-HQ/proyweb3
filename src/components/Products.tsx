import { motion } from "motion/react";
import {
    Building2,
    Home,
    Hotel,
    ArrowUpRight,
} from "lucide-react";

const products = [
    {
        icon: Building2,
        title: "Ascensores comerciales",
        description:
            "Soluciones de alto rendimiento para edificios corporativos, oficinas y centros comerciales.",
        number: "01",
    },
    {
        icon: Hotel,
        title: "Ascensores premium",
        description:
            "Diseño, confort y tecnología para hoteles y proyectos arquitectónicos de alto nivel.",
        number: "02",
    },
    {
        icon: Home,
        title: "Soluciones residenciales",
        description:
            "Movilidad vertical silenciosa y eficiente para edificios y proyectos residenciales.",
        number: "03",
    },
];

export default function Products() {
    return (
        <section
            id="productos"
            className="section products-section"
        >
            <div className="container">

                <div className="section-header">
                    <div className="section-label">
                        <span>01</span>
                        Productos y soluciones
                    </div>

                    <h2 className="section-title">
                        Tecnología que
                        <span className="gradient-text">
                            {" "}sube contigo.
                        </span>
                    </h2>

                    <p className="section-description">
                        Cada proyecto requiere una solución
                        diferente. Diseñamos sistemas de
                        movilidad vertical adaptados a cada
                        espacio.
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => {
                        const Icon = product.icon;

                        return (
                            <motion.article
                                className="product-card"
                                key={product.title}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * 0.1,
                                }}
                            >
                                <div className="product-number">
                                    {product.number}
                                </div>

                                <div className="product-icon">
                                    <Icon size={28} />
                                </div>

                                <h3>
                                    {product.title}
                                </h3>

                                <p>
                                    {product.description}
                                </p>

                                <a href="#contacto">
                                    Conocer más
                                    <ArrowUpRight
                                        size={17}
                                    />
                                </a>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}