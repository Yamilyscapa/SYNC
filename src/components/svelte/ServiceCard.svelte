<script lang="ts">
  export let service: "web" | "app" | "custom" = "web";

  let serviceCards = {
    web: {
      title: "Desarrollo Web",
      description:
        "Creamos sitios web personalizados y optimizados para tu negocio. Desde páginas informativas hasta tiendas en línea, tenemos la solución perfecta para ti.",
      link: { href: "/web", text: "sitio web" },
      image: "/web_development_service.webp",
      alt: "Ilustración de desarrollo web mostrando código y elementos de diseño"
    },
    app: {
      title: "Desarrollo de Apps",
      description:
        "Desarrollamos aplicaciones móviles a medida para iOS y Android.",
      link: { href: "/app", text: "aplicación móvil" },
      image: "/images/app-development.jpg",
      alt: "Mockup de aplicación móvil en smartphone"
    },
    custom: {
      title: "Soluciones a Medida",
      description:
        "Ofrecemos soluciones personalizadas para tus necesidades específicas.",
      link: { href: "/custom", text: "solución personalizada" },
      image: "/images/custom-solutions.jpg",
      alt: "Diagrama de soluciones personalizadas de software"
    },
  };

  const currentService = serviceCards[service];
</script>

<div class="service_card">
  <div class="service_card_content">
    <h2 class="title">{currentService.title}</h2>
    <p>
      {currentService.description}
    </p>
    <a href={currentService.link.href} class="link"
      >Quiero mi {currentService.link.text}</a
    >
  </div>
  <div class="image">
    <img 
      src={currentService.image} 
      alt={currentService.alt} 
      loading="lazy"
      decoding="async"
      width="600"
      height="400"
      style="aspect-ratio: 3/2;"
    />
  </div>
</div>

<style lang="scss">
  .service_card {
    width: 100%;
    max-height: 500px;
    background: rgba(255, 255, 255, 0.1);
    padding: 4rem;
    border-radius: 0.8rem;
    display: grid;
    grid-template-columns: 50% 50%;
    overflow: hidden;

    &_content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: start;
      gap: 1rem;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1rem;
      }
    }

    .image {
      width: 600px;
      display: flex;
      /* Reserve space for image to prevent layout shift */
      min-height: 400px;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 0.8rem;
        /* Ensure aspect ratio is maintained */
        aspect-ratio: 3/2;
        /* Smooth transition when image loads */
        transition: opacity 0.3s ease;
      }
      
      /* Image loading state */
      img[loading] {
        background: rgba(255, 255, 255, 0.1);
      }
    }

    @media screen and (max-width: 1550px) {
      max-height: 650px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1rem;

      &_content {
        flex-direction: column;
        text-align: center;

        p {
          width: 80%;
          margin: auto;
        }

        .link {
          margin: auto;
        }
      }
      
      .image {
        /* Maintain consistent dimensions in mobile layout */
        min-height: 333px; /* 500px * 2/3 aspect ratio */
      }
    }

    @media screen and (max-width: 1200px) {
      .image {
        width: 500px;
        min-height: 333px; /* 500px * 2/3 aspect ratio */
      }
    }

    @media screen and (max-width: 750px) {
      padding: 4rem 2rem;

      &_content {
        p {
          width: 100%;
          font-size: 0.9rem;
        }
      }

      .image {
        width: 350px;
        min-height: 233px; /* 350px * 2/3 aspect ratio */
      }
    }
  }
</style>
