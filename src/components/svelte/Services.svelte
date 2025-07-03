<script lang="ts">
  import { onMount } from 'svelte';
  import ServiceCard from "./ServiceCard.svelte";
  import ServiceSelector from "./ServiceSelector.svelte";
  let currentService: "web" | "app" | "custom" = "web";
  
  onMount(() => {
    // Hide the loading skeleton with smooth transition when component mounts
    const skeleton = document.getElementById('services-skeleton');
    if (skeleton) {
      requestAnimationFrame(() => {
        skeleton.style.opacity = '0';
        skeleton.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
          skeleton.style.display = 'none';
        }, 300);
      });
    }
  });
</script>

<section class="services section">
  <div class="services_header">
    <h2 class="title">Servicios de Desarrollo Web para PyMEs en México</h2>
    <p>
      Nuestro equipo de expertos en desarrollo web está especializado en crear soluciones digitales 
      que impulsan el crecimiento de pequeñas y medianas empresas en Puebla y todo México.
    </p>

    <ServiceSelector />
  </div>

  <div class="services_container">
    <ServiceCard
      service={currentService}
      on:serviceChange={(e) => (currentService = e.detail)}
    />
  </div>
</section>

<style lang="scss">
  .services {
    padding-top: 4rem;

    &_header {
      text-align: center;

      h2 {
        margin-bottom: 1rem;
        font-size: 2.5rem;
      }

      p {
        font-size: 1.2rem;
        opacity: 70%;
        max-width: 800px;
        margin: 0 auto;
        margin-bottom: 2rem;
      }
    }

    &_container {
      width: 100%;
      margin-top: 4rem;
    }

    .service_card {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
</style>
