<script lang="ts">
  import ServiceCard from "./ServiceCard.svelte";
  import ServiceSelector from "./ServiceSelector.svelte";
  let currentService: "web" | "app" | "custom" = "web";
</script>

<section class="services section">
  <div class="services_header">
    <h2 class="title">Tu empresa en la internet, comienza aquí</h2>
    <p>
      Nuestro equipo de expertos está listo para llevar tu negocio al
      siguiente nivel con soluciones digitales personalizadas.
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
