<script lang="ts">
  type Service = "web" | "app" | "custom";

  let activeService: Service = "web";

  function handleServiceChange(service: Service) {
    activeService = service;

    const event = new CustomEvent("serviceChange", {
      detail: { service },
      bubbles: true,
      composed: true
    });
    
    dispatchEvent(event);
  }
</script>

<div class="service_selector">
  <button class="service_web_design button secondary" on:click={() => handleServiceChange("web")}>Desarrollo web</button>
  <!-- <button class="service_app_development button secondary" on:click={() => handleServiceChange("app")}>Desarrollo de apps</button> -->
  <!-- <button class="service_custom_solutions button secondary" on:click={() => handleServiceChange("custom")}>Soluciones a medida</button> -->
</div>

<style lang="scss">
  .service_selector {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2rem;

    button {
      border: none;
      font-size: 0.9rem;
      transition: all 0.3s ease;

      &:hover {
        transform: none;
        background: rgba(255, 255, 255, 0.3);
      }

      &:only-child {
        margin: auto;
      }
    }

    @media screen and (max-width: 800px) {
      max-width: 100%;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      justify-content: flex-start;
      gap: 0.2rem;

      button {
        text-wrap: nowrap;
        min-width: max-content;
        flex-shrink: 0;
        scroll-snap-align: start;

        &:focus {
          scroll-margin-left: 1rem;
        }
      }
    }
  }
</style>
