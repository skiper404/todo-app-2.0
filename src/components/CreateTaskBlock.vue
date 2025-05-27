<script setup></script>

<template>
  <div class="relative m-2 border">
    <div>Create Task</div>
    <div>
      <label for="taskName"
        >Task Name:<input
          type="text"
          id="taskName"
          class="border"
          placeholder="Task name..."
          @keyup.enter=""
      /></label>
    </div>
    <div>
      <label for="taskPriority">
        <span> Task Priority: </span>
        <select id="taskPriority" @keyup.enter="">
          <option value="1">1</option>
        </select>
      </label>
    </div>
    <div>
      <label for="taskPriority">
        <span> Task Category: </span>
        <select id="taskSelect" @keyup.enter="">
          <option value="1">1</option>
        </select>
      </label>
    </div>
    <div>
      <label for="taskStatus">
        <span> Task Status: </span>
        <select id="taskStatus" @keyup.enter="">
          <option value="1">1</option>
        </select>
      </label>
    </div>

    <button
      class="m-2 border border-green-400 hover:border-yellow-400"
      @click=""
    >
      Create Task
    </button>
  </div>
</template>
