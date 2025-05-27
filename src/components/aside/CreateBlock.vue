<script setup>
import AsideCreateButton from "./AsideCreateButton.vue";
</script>

<template>
  <div class="flex flex-col whitespace-nowrap">
    <AsideCreateButton />

    <div class="flex items-center">
      <label for="listName">List Name: </label>
      <input
        id="listName"
        type="text"
        class="mx-2 my-1 w-full outline-0"
        placeholder="List name..."
        @keyup.enter=""
      />
    </div>
    <div class="flex items-center">
      List Status:
      <select id="list" class="mx-2 my-1 w-full" @keyup.enter="">
        <option value="a" selected>A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
    </div>
  </div>
</template>
