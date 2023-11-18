<script>
  import Navbar from "$widgets/navbar.svelte";
  import NavbarBottom from "$widgets/navbar-bottom.svelte";
</script>

<Navbar title={"My Files"} />
<div class="relative">
  <slot />
</div>
<NavbarBottom />
