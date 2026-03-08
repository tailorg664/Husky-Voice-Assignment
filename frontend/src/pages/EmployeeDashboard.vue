<script setup>
import { ref, onMounted } from "vue";
import api from "../services/api";
import { useRouter } from "vue-router"

const router = useRouter()
const leaves = ref([]);

const leaveType = ref("");
const startDate = ref("");
const endDate = ref("");
const reason = ref("");

const applyLeave = async () => {
  try {
    const token = localStorage.getItem("token");

    await api.post(
      "/leaves",
      {
        leaveType: leaveType.value,
        startDate: startDate.value,
        endDate: endDate.value,
        reason: reason.value,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    alert("Leave applied");

    fetchLeaves();
  } catch (err) {
    alert("Error applying leave");
  }
};

const fetchLeaves = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await api.get("/leaves/my", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    leaves.value = res.data;
  } catch (err) {
    console.log(err);
  }
};
const logout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
onMounted(fetchLeaves);
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-10">

    <div class="max-w-6xl mx-auto">

      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-800">
          Employee Dashboard
        </h1>

        <button
          @click="logout"
          class="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm"
        >
          Logout
        </button>
      </div>

      <!-- Apply Leave Form -->
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">

        <h2 class="text-lg font-semibold text-gray-700 mb-4">
          Apply for Leave
        </h2>

        <div class="space-y-4">

          <div>
            <label class="block text-sm text-gray-600 mb-1">
              Leave Type
            </label>
            <input
              v-model="leaveType"
              placeholder="Example: Sick Leave"
              class="border border-gray-300 p-2 rounded-md w-full text-sm"
            />
          </div>

          <div>
            <label class="block text-sm text-gray-600 mb-1">
              Start Date
            </label>
            <input
              v-model="startDate"
              type="date"
              class="border border-gray-300 p-2 rounded-md w-full text-sm"
            />
          </div>

          <div>
            <label class="block text-sm text-gray-600 mb-1">
              End Date
            </label>
            <input
              v-model="endDate"
              type="date"
              class="border border-gray-300 p-2 rounded-md w-full text-sm"
            />
          </div>

          <div>
            <label class="block text-sm text-gray-600 mb-1">
              Reason
            </label>
            <textarea
              v-model="reason"
              placeholder="Reason for leave"
              class="border border-gray-300 p-2 rounded-md w-full text-sm"
            ></textarea>
          </div>

          <button
            @click="applyLeave"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Apply Leave
          </button>

        </div>

      </div>

      <!-- Leave Requests Table -->
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">

        <h2 class="text-lg font-semibold text-gray-700 mb-4">
          My Leave Requests
        </h2>

        <table class="w-full text-sm text-left">

          <thead class="bg-gray-100 text-gray-700">
            <tr>
              <th class="px-4 py-3 font-medium">Leave Type</th>
              <th class="px-4 py-3 font-medium">Start Date</th>
              <th class="px-4 py-3 font-medium">End Date</th>
              <th class="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="leave in leaves"
              :key="leave._id"
              class="border-t hover:bg-gray-50 transition"
            >
              <td class="px-4 py-2">{{ leave.leaveType }}</td>

              <td class="px-4 py-2">
                {{ leave.startDate.slice(0,10) }}
              </td>

              <td class="px-4 py-2">
                {{ leave.endDate.slice(0,10) }}
              </td>

              <td class="px-4 py-2 capitalize">
                {{ leave.status }}
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>