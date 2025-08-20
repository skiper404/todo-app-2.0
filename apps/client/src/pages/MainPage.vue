<script setup></script>

<template>
  <div class="flex h-screen flex-col text-2xl">
    <div class="mx-auto text-8xl">Main Page</div>
    <div class="flex justify-center gap-4">
      <router-link
        class="text-gray-400 hover:text-indigo-500"
        :to="{ name: 'HomePage' }"
        >Home Page</router-link
      >
      <router-link
        class="text-gray-400 hover:text-indigo-500"
        :to="{ name: 'LoginPage' }"
        >Login Page</router-link
      >
      <router-link
        class="text-gray-400 hover:text-indigo-500"
        :to="{ name: 'SignupPage' }"
        >Signup Page</router-link
      >
      <router-link
        class="text-gray-400 hover:text-indigo-500"
        :to="{ name: 'ForgotPasswordPage' }"
        >Forgot password</router-link
      >
      <router-link
        class="text-gray-400 hover:text-indigo-500"
        :to="{ name: 'ResetPasswordPage' }"
        >Reset password</router-link
      >
      <router-link
        class="text-gray-400 hover:text-indigo-500"
        :to="{ name: 'SuccessResetPage' }"
        >Success reset</router-link
      >
    </div>
  </div>
</template>
