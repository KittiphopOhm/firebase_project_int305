<script setup>
import { ref } from 'vue';

const props = defineProps({
  orders: {
    type: Array,
    required: true
  },
  countOrders: {
    type: Number
  }
})

const emits = defineEmits(['filterOrders'])
const status = ref('All')
const resetFilter = () => {
  status.value = 'All'
  emits('filterOrders', 'All')
}
</script>

<template>
  <div class="h-full bg-white">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div class="mb-8">
        <form class="mb-5">
          <input v-model="status" @change="$emit('filterOrders', status)" value="All"
            class="btn appearance-none px-4 py-2 rounded-md borderborder-gray-300 cursor-pointer checked:bg-blue-400 checked:border-blue-400 checked:text-white" type="radio" name="frameworks"
            aria-label="All" />
          <input v-model="status" @change="$emit('filterOrders', status)" value="Pending"
            class="btn appearance-none px-4 py-2 rounded-md borderborder-gray-300 cursor-pointer checked:bg-blue-400 checked:border-blue-400 checked:text-white ml-1" type="radio" name="frameworks"
            aria-label="Pending" />
          <input v-model="status" @change="$emit('filterOrders', status)" value="Confirm"
            class="btn appearance-none px-4 py-2 rounded-md borderborder-gray-300 cursor-pointer checked:bg-blue-400 checked:border-blue-400 checked:text-white ml-1" type="radio" name="frameworks"
            aria-label="Confirm" />
          <button @click="resetFilter" class="btn btn-square ml-1">×</button>
        </form>
        <h2 v-if="orders.length <= 0" class="text-3xl text-center sm:text-4xl font-semibold text-gray-400 mb-2">
          No Order
        </h2>
        <h2 v-else class="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
          Your Orders
        </h2>
        <p v-if="orders.length > 0" class="text-lg text-gray-600 mb-1">Total orders: {{ countOrders }}</p>
      </div>


      <div class="space-y-4">
        <div v-for="order in orders" :key="order.id"
          class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <router-link :to="{ name: 'OrderDetail', params: { id: order.id } }">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-3 mb-2">
                  <h3 class="text-lg font-semibold text-gray-900">
                    Order #{{ order.id }}
                  </h3>
                </div>
                <p class="text-sm text-gray-600 mb-1">Ordered on {{ order?.date?.toDate().toLocaleString('th-TH') }}</p>
                <span class="text-sm font-semibold">Status: </span>
                <span
                  :class="order?.status === 'Pending' ? 'text-sm font-semibold text-blue-500' : 'text-sm font-semibold text-green-500'">
                  {{ order?.status }}
                </span>
              </div>

              <div class="text-left lg:text-right">
                <p class="text-sm text-gray-600 mb-1">Total</p>
                <p class="text-xl font-semibold text-gray-900">฿{{ order?.product?.price?.toFixed(2) }}</p>
              </div>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <div class="flex flex-wrap gap-4">
                <div class="flex items-center gap-3">
                  <div class="w-16 h-16 rounded-lg">
                    <img :src="order?.product?.images?.[0]" alt="Product">
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">{{ order?.product?.brand }}</p>
                    <p class="text-sm font-medium text-gray-900">{{ order?.product?.model }}</p>
                    <p class="text-xs text-gray-600">Quantity: 1</p>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped></style>