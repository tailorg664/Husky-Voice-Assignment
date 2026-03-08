<script setup>
import { ref } from "vue"
import api from "../services/api"
import { useRouter } from "vue-router"

const router = useRouter()

const name = ref("")
const email = ref("")
const password = ref("")
const role = ref("")

const handleSignup = async () => {
  try {
    await api.post("/auth/signup", {
      name: name.value,
      email: email.value,
      password: password.value,
      role: role.value
    })

    alert("Signup successful")
    router.push("/login")

  } catch (err) {
    alert("Signup failed")
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">

    <div class="bg-white border border-gray-200 shadow-sm p-8 rounded-xl w-full max-w-md">

      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
        Create an Account
      </h2>

      <form @submit.prevent="handleSignup" class="space-y-5">

        <div>
          <label class="block text-sm text-gray-600 mb-1">
            Full Name
          </label>
          <input
            v-model="name"
            type="text"
            placeholder="John Doe"
            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

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
            placeholder="Enter a password"
            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm text-gray-600 mb-1">
            Select Role
          </label>
          <select
            v-model="role"
            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose your role</option>
            <option value="employee">Employee</option>
            <option value="employer">Employer</option>
          </select>
        </div>

        <button
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition"
        >
          Sign Up
        </button>

      </form>

      <p class="text-center text-sm text-gray-600 mt-6">
        Already have an account?
        <router-link to="/login" class="text-blue-600 hover:underline font-medium">
          Login
        </router-link>
      </p>

    </div>

  </div>
</template>