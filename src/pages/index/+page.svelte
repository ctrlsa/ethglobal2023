<script>
  import StackedList from "$lib/ui/list/stacked.svelte";
  import StackedListItem from "$lib/ui/list/stackedItem.svelte";
  import File from "$lib/ui/input/file.svelte";
  import cover from "$lib/assets/images/random-cover.jpg";
</script>

<svelte:head>
  <title>FileDrop</title>
</svelte:head>

<div class="pb-3 pt-2 pl-3 pr-3 overflow-y-auto">
  <StackedList class="max-w-sm">
    <StackedListItem>
      <div class="flex min-w-0 gap-x-4">
        <img class="h-24 w-24 flex-none shrink-0 bg-transparent rounded-xl" src="{cover}" alt="">
        <div class="min-w-0 flex-auto">
          <p class="truncate text-ellipsis overflow-hidden text-sm font-semibold leading-6">Cosmic-timetraveler-LhDWW8PhPoE-unsplash.jpg</p>
          <p class="text-ellipsis overflow-hidden mt-1 text-xs leading-5 text-gray-500">QmUUrmqtfQMkG2zp5t57ajwMLkzLKRTcTBib8XW1x1GNSX</p>
        </div>
      </div>
    </StackedListItem>
    <StackedListItem>
      <div class="flex min-w-0 gap-x-4">
        <div class="skeleton w-24 h-24 shrink-0"></div>
        <div class="min-w-0 flex-auto">
          <p class="truncate text-ellipsis overflow-hidden text-sm font-semibold leading-6">Uploading...</p>
          <p class="text-ellipsis overflow-hidden mt-1 text-xs leading-5 text-gray-500">Waiting for CID from provider</p>
        </div>
      </div>
    </StackedListItem>
  </StackedList>
  <File class="file-input file-input-bordered file-input-info w-full max-w-md mt-3" />
</div>