<script setup>
import { ref } from "vue"
import api from "../services/api"
import { useRouter } from "vue-router"

const router = useRouter()

const email = ref("")
const password = ref("")

const handleLogin = async () => {
  try {
    const res = await api.post("/auth/login", {
      email: email.value,
      password: password.value
    })
    localStorage.setItem("token", res.data.token)
    const user = res.data.user

    if (user.role === "employee") {
      router.push("/employee-dashboard")
    } else {
      router.push("/employer-dashboard")
    }

  } catch (err) {
    alert("Login failed")
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">

    <div class="bg-white border border-gray-200 shadow-sm p-8 rounded-xl w-full max-w-md">

      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
        Login to Your Account
      </h2>

      <form @submit.prevent="handleLogin" class="space-y-5">

        <div>
          <label class="block text-sm text-gray-600 mb-1">
            Email Address
          </label>
          <input
            v-model="email"
            type="email"
            placeholder="example@email.com"
            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm text-gray-600 mb-1">
            Password
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition"
        >
          Login
        </button>

      </form>

      <p class="text-center text-sm text-gray-600 mt-6">
        Don't have an account?
        <router-link to="/signup" class="text-blue-600 hover:underline font-medium">
          Sign Up
        </router-link>
      </p>

    </div>

  </div>
</template>