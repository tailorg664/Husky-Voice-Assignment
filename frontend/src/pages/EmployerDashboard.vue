<script setup>
import { ref, onMounted } from "vue";
import api from "../services/api";
import { useRouter } from "vue-router"

const router = useRouter()
const logout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
const leaves = ref([]);

const fetchLeaves = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await api.get("/leaves", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    leaves.value = res.data;
  } catch (err) {
    console.log(err);
  }
};

const updateStatus = async (id, status) => {
  try {
    const token = localStorage.getItem("token");

    await api.patch(
      `/leaves/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    fetchLeaves();
  } catch (err) {
    console.log(err);
  }
};

onMounted(fetchLeaves);
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-10">

    <div class="max-w-6xl mx-auto">

      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-800">
          Employer Dashboard
        </h1>

        <button
          @click="logout"
          class="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm"
        >
          Logout
        </button>
      </div>

      <div class="bg-white rounded-lg shadow-sm border border-gray-200">

        <table class="w-full text-sm text-left">

          <thead class="bg-gray-100 text-gray-700">
            <tr>
              <th class="px-4 py-3 font-medium">Employee Name</th>
              <th class="px-4 py-3 font-medium">Leave Type</th>
              <th class="px-4 py-3 font-medium">Start Date</th>
              <th class="px-4 py-3 font-medium">End Date</th>
              <th class="px-4 py-3 font-medium">Status</th>
              <th class="px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="leave in leaves"
              :key="leave._id"
              class="border-t hover:bg-gray-50 transition"
            >

              <td class="px-4 py-2">
                {{ leave.employee.name }}
              </td>

              <td class="px-4 py-2">
                {{ leave.leaveType }}
              </td>

              <td class="px-4 py-2">
                {{ leave.startDate.slice(0,10) }}
              </td>

              <td class="px-4 py-2">
                {{ leave.endDate.slice(0,10) }}
              </td>

              <td class="px-4 py-2 capitalize">
                {{ leave.status }}
              </td>

              <td class="px-4 py-2 space-x-2">

                <button
                  @click="updateStatus(leave._id,'approved')"
                  class="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-xs"
                >
                  Approve
                </button>

                <button
                  @click="updateStatus(leave._id,'rejected')"
                  class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs"
                >
                  Reject
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>