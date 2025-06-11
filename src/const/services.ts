import type Service from '../types/services';

const webDevelopment: Service = {
    type: 'Desarrollo web',
    description: 'Creamos sitios web modernos y funcionales que se adaptan a tus necesidades. Desde páginas informativas hasta tiendas en línea, tenemos la solución perfecta para ti.',
    icon: '',
    link: '/services/web-development'
};

const appDevelopment: Service = {
    type: 'Desarrollo de apps',
    description: 'Desarrollamos aplicaciones móviles intuitivas y eficientes para iOS y Android. Desde la planificación hasta el lanzamiento, te acompañamos en cada paso del proceso.',
    icon: '',
    link: '/services/app-development'
};

const customSolutions: Service = {
    type: 'Soluciones a medida',
    description: 'Creamos soluciones personalizadas para satisfacer las necesidades específicas de tu negocio. Desde software a medida hasta integraciones complejas, estamos aquí para ayudarte a alcanzar tus objetivos.',
    icon: '',
    link: '/services/custom-solutions'
};

export const services: Record<string, Service> = {
    webDevelopment,
    appDevelopment,
    customSolutions
};