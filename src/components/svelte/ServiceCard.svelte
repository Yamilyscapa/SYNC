<script lang="ts">
  export let service: "web" | "app" | "custom" = "web";

  let serviceCards = {
    web: {
      title: "Desarrollo Web",
      description:
        "Creamos sitios web personalizados y optimizados para tu negocio. Desde páginas informativas hasta tiendas en línea, tenemos la solución perfecta para ti.",
      link: { href: "/web", text: "sitio web" },
      image: "/web_development_service.webp",
    },
    app: {
      title: "Desarrollo de Apps",
      description:
        "Desarrollamos aplicaciones móviles a medida para iOS y Android.",
      link: { href: "/app", text: "aplicación móvil" },
      image: "/images/app-development.jpg",
    },
    custom: {
      title: "Soluciones a Medida",
      description:
        "Ofrecemos soluciones personalizadas para tus necesidades específicas.",
      link: { href: "/custom", text: "solución personalizada" },
      image: "/images/custom-solutions.jpg",
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
    <img src={currentService.image} alt={currentService.title} />
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

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 0.8rem;
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
    }

    @media screen and (max-width: 1200px) {
      .image {
        width: 500px;
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
      }
    }
  }
</style>
