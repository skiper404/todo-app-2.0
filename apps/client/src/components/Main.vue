<script setup>
import { useMainStore } from "@/stores";
import { onMounted, ref } from "vue";
import axios from "axios";
import BaseButton from "./BaseButton.vue";

const mainStore = useMainStore();
const API_URL = "http://localhost:3000";

const newApp = ref("");

const fetchApps = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/api/apps`);
    mainStore.apps = data.data.apps;
    mainStore.message = data.message;
  } catch (error) {
    mainStore.message = error.message;
  }
};

const createApp = async () => {
  try {
    const { data } = await axios.post(`${API_URL}/api/create-app`, {
      appName: newApp.value,
    });
    await fetchApps();
    mainStore.message = data.message;
    newApp.value = "";
  } catch (error) {
    mainStore.message = error.message;
  }
};

const removeApp = async (appId) => {
  try {
    const { data } = await axios.delete(`${API_URL}/api/delete-app/${appId}`);
    mainStore.apps = mainStore.apps.filter((app) => app._id !== appId);
    mainStore.message = data.message;
  } catch (error) {
    mainStore.message = error.message;
  }
};

onMounted(() => fetchApps());
</script>

<template>
  <main class="pt-16">
    <div class="p-4">Apps</div>
    <div>{{ mainStore.message }}</div>
    <div class="flex gap-2">
      <input type="text" class="border" v-model="newApp" /><button
        class="border hover:text-green-500"
        @click="createApp"
      >
        Create
      </button>
    </div>
    <ul class="flex flex-col gap-2">
      <li
        v-for="{ _id, name } in mainStore.apps"
        :key="_id"
        class="flex gap-2 border p-2"
      >
        <div>{{ name }}</div>
        <BaseButton
          classes="hover:text-red-400 ml-auto"
          label="remove"
          @click="removeApp(_id)"
        />
      </li>
    </ul>
  </main>
</template>
