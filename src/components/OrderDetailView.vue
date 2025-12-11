<script setup>
const emits = defineEmits(['confirmStatus'])
const props = defineProps({
    orderDetail: {
        type: Object,
        required: true
    }
})
</script>

<template>
  <div class="h-full bg-white mt-5">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <button class="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        <router-link :to="{name: 'OrderList'}" class="text-sm font-medium">Back</router-link>
      </button>
      <div class="mb-8">
        <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
          Order Details
        </h2>
        <p class="font-semibold text-gray-600">Order number: {{ orderDetail?.id }}</p>
        <p class="text-sm text-gray-500">Ordered on {{ orderDetail?.date?.toDate().toLocaleString('th-TH') }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-8">
          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-1">
                  Status
                </h3>
              </div>
              <span :class="orderDetail?.status === 'Pending' ? 'px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium' : 'px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium'">
                {{ orderDetail?.status }}
              </span>
            </div>

            <div class="space-y-4">
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1 pb-8">
                  <p class="font-medium text-gray-900">
                    Pay successfully
                  </p>
                  <p class="text-sm text-gray-500 mt-1">{{ orderDetail?.date?.toDate().toLocaleString('th-TH') }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">
              Items
            </h3>

            <div class="space-y-6">
              <div 
                class="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-lg">
                    <img :src="orderDetail?.product?.images?.[0]" alt="">
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-gray-900 mb-1">
                    {{ orderDetail?.product?.model }}
                  </h4>
                  <p class="text-sm text-gray-600 mb-2">
                    {{ orderDetail?.product?.brand }}
                  </p>
                  <p class="text-sm text-gray-500">Quantity: 1</p>
                </div>
                <div class="text-right">
                  <p class="font-semibold text-gray-900">${{ orderDetail?.product?.price.toFixed(2) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Address
            </h3>
            <div class="text-gray-700 space-y-1">
              <p class="font-medium">{{ orderDetail.email }}</p>
              <p class="font-medium">Address: {{ orderDetail.address }}</p>
              <p>City: {{ orderDetail.city }}</p>
              <p>Zip code: {{ orderDetail.zipCode }}</p>
              <p class="text-gray-600 mt-2">Phone: {{ orderDetail.phone }}</p>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Payment Method
            </h3>
            <div class="flex items-center gap-3">
              <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke-width="2"/>
                <path d="M2 10h20" stroke-width="2"/>
              </svg>
              <div>
                <p class="font-medium text-gray-900">{{ orderDetail?.cardName }}</p>
                <p class="text-sm text-gray-600">{{ orderDetail?.cvv }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="bg-gray-50 rounded-2xl p-6 lg:sticky lg:top-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">
              Order Summary
            </h3>

            <div class="space-y-4">
              <div class="flex justify-between text-gray-700">
                <span>Price</span>
                <span>${{ orderDetail?.product?.price.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-gray-700">
                <span>Shipping cost</span>
                <span class="text-green-600">
                  Free
                </span>
              </div>
              <div class="flex justify-between text-gray-700">
                <span>TAX</span>
                <span>$0</span>
              </div>

              <div class="border-t border-gray-300 pt-4 flex justify-between text-xl font-semibold text-gray-900">
                <span>Total</span>
                <span>${{ orderDetail?.product?.price.toFixed(2) }}</span>
              </div>
            </div>

            <div class="mt-6 space-y-3">
              <button @click="$emit('confirmStatus', orderDetail.id)" v-if="orderDetail?.status === 'Pending'" class="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium py-3 px-4 rounded-lg transition">
                Confirm Receipt
              </button>
              <button v-if="orderDetail?.status === 'Confirm'" class="w-full text-gray-400 border cursor-no-drop border-gray-400 font-medium py-3 px-4 rounded-lg transition">
                Confirmed
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>