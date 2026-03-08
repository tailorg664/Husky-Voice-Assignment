<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">

    <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-10 text-center max-w-md w-full">

      <h1 class="text-3xl font-semibold text-gray-800 mb-3">
        Leave Management System
      </h1>

      <p class="text-gray-600 text-sm mb-8 leading-relaxed">
        Employees can easily apply for leave while employers can review and approve or reject requests.
      </p>

      <div class="flex gap-4 justify-center">

        <router-link to="/login">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition">
            Login
          </button>
        </router-link>

        <router-link to="/signup">
          <button class="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-md text-sm font-medium transition">
            Sign Up
          </button>
        </router-link>

      </div>

    </div>

  </div>
</template>