<script>
  import { Plus } from "lucide-svelte";

  import Button from "$lib/ui/button/button.svelte";

  export let title="Title";
  export let address="";

  function shortAddr(addr) {
    return addr.substring(0, 6) + "..." + addr.substring(addr.length - 4);
  }
</script>

<nav class="navbar sticky top-0 z-10 bg-base-100">
  <div class="navbar-start">
    <Button href="/index" class="btn btn-ghost m-0 p-0 text-2xl normal-case">
      {title}
    </Button>
    {#if address}
      <span class="badge p-3 ml-2">
        {shortAddr(address)}
      </span>
    {/if}
  </div>
  <div class="navbar-end group">
    <slot />
  </div>
</nav>
