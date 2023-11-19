<script>
  import "../app.css";

  import { onMount } from 'svelte';
  import { onNavigate } from "$app/navigation";
  import WebApp from "@twa-dev/sdk";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  onMount(() => {
    WebApp.ready();
    WebApp.expand();
  });
</script>

<svelte:head>
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
</svelte:head>

<div class="container">
  <slot />
</div>
