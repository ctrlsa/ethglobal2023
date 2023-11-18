<script>
  import { Plus } from "lucide-svelte";

  import Button from "$lib/ui/button/button.svelte";

  export let title="Title";
</script>

<nav class="navbar sticky top-0 z-10 bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <Button href="/index" class="btn btn-ghost m-0 p-0 text-2xl normal-case">
        {title}
      </Button>
    </div>
  </div>
  <div class="navbar-end group">
    <Button class="btn btn-circle btn-md">
      <Plus class="h-7 w-7" />
    </Button>
  </div>
</nav>
