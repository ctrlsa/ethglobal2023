<script>
  import StackedList from "$lib/ui/list/stacked.svelte";
  import StackedListItem from "$lib/ui/list/stackedItem.svelte";
</script>

<svelte:head>
  <title>FileDrop</title>
</svelte:head>

<div class="grid pb-3 pt-2 pl-3 pr-3">
<StackedList>
  <StackedListItem>
    <div class="flex min-w-0 gap-x-4">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6">File name</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">CID</p>
      </div>
    </div>
  </StackedListItem>
  <StackedListItem />
</StackedList>
</div>