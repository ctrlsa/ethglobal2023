<script>
  import Navbar from "$widgets/navbar.svelte";
  import NavbarBottom from "$widgets/navbar-bottom.svelte";
  import { Plus } from "lucide-svelte";
  import Button from "$lib/ui/button/button.svelte";
</script>

<Navbar title={"My Files"}>
    <Button class="btn btn-circle btn-md">
      <Plus class="h-7 w-7" />
    </Button>
</Navbar>

<div class="relative">
  <slot />
</div>

<NavbarBottom />
