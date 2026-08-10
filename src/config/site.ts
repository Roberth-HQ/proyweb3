export interface SiteConfig {
    name: string;
    shortName: string;
    description: string;
    phone: string;
    email: string;
    location: string;
    navigation: NavigationItem[];
}

export interface NavigationItem {
    label: string;
    href: string;
}

export const siteConfig: SiteConfig = {
    name: "Vertical Ascensores",
    shortName: "Vertical",

    description:
        "Soluciones inteligentes de movilidad vertical para edificios modernos.",

    phone: "+591 700 00000",

    email: "contacto@verticalascensores.com",

    location: "Bolivia",

    navigation: [
        {
            label: "Productos y Soluciones",
            href: "#productos",
        },
        {
            label: "Mantenimiento y Servicios",
            href: "#servicios",
        },
        {
            label: "Sobre Nosotros",
            href: "#nosotros",
        },
        {
            label: "Empleo",
            href: "#empleo",
        },
        {
            label: "Contacto",
            href: "#contacto",
        },
    ],
};