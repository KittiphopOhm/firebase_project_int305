<script setup>
import { ref } from 'vue';
import Navbar from './Navbar.vue';

const formData = ref({
  email: '',
  cardNumber: '',
  cardName: '',
  expiry: '',
  cvv: '',
  address: '',
  city: '',
  zipCode: ''
});

const handleSubmit = () => {
  alert('การชำระเงินสำเร็จ!');
};
</script>

<template>
    <Navbar />
  <div class="h-full bg-white mt-10">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="order-2 lg:order-1">
          <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
            Payment
          </h2>

          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                Contact
              </h3>
              <input
                v-model="formData.email"
                type="email"
                placeholder="Email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                Payment Method
              </h3>
              
              <div class="space-y-3">
                <div class="relative">
                  <svg class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke-width="2"/>
                    <path d="M2 10h20" stroke-width="2"/>
                  </svg>
                  <input
                    v-model="formData.cardNumber"
                    type="text"
                    placeholder="Card numbers"
                    maxlength="19"
                    class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <input
                  v-model="formData.cardName"
                  type="text"
                  placeholder="Name"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />

                <div class="grid grid-cols-2 gap-3">
                  <input
                    v-model="formData.expiry"
                    type="text"
                    placeholder="MM/YY"
                    maxlength="5"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <input
                    v-model="formData.cvv"
                    type="text"
                    placeholder="CVV"
                    maxlength="3"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                Address
              </h3>
              
              <div class="space-y-3">
                <input
                  v-model="formData.address"
                  type="text"
                  placeholder="Address"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />

                <div class="grid grid-cols-2 gap-3">
                  <input
                    v-model="formData.city"
                    type="text"
                    placeholder="City"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <input
                    v-model="formData.zipCode"
                    type="text"
                    placeholder="Zip Code"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>
            </div>

            <button
              @click="handleSubmit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke-width="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4" stroke-width="2"/>
              </svg>
              Pay ฿29,900
            </button>

            <p class="text-sm text-gray-500 text-center">
              การชำระเงินของคุณได้รับการรักษาความปลอดภัย
            </p>
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <div class="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:sticky lg:top-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">
              Order Summary
            </h3>

            <div class="flex gap-4 mb-6">
              <div class="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-lg"></div>
              <div class="flex-1">
                <h4 class="font-medium text-gray-900 mb-1">
                  MacBook Pro 14"
                </h4>
                <p class="text-sm text-gray-600 mb-2">
                  M3 Pro, 18GB, 512GB
                </p>
                <p class="text-sm text-gray-600">จำนวน: 1</p>
              </div>
              <div class="text-right">
                <p class="font-medium text-gray-900">฿29,900</p>
              </div>
            </div>

            <div class="border-t border-gray-300 pt-4 space-y-3">
              <div class="flex justify-between text-gray-600">
                <span>Price</span>
                <span>฿29,900</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Shipping cost</span>
                <span class="text-green-600">Free</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>VAT</span>
                <span>฿0</span>
              </div>
              
              <div class="border-t border-gray-300 pt-4 flex justify-between text-xl font-semibold text-gray-900">
                <span>Total</span>
                <span>฿29,900</span>
              </div>
            </div>

            <!-- Delivery Info -->
            <div class="mt-6 pt-6 border-t border-gray-300">
              <p class="text-sm text-gray-600">
                จัดส่งฟรีภายใน 2-3 วันทำการ
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- <footer class="border-t border-gray-200 mt-12 lg:mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p class="text-sm text-gray-500 text-center">
          © 2024 Apple Inc. สงวนลิขสิทธิ์
        </p>
      </div>
    </footer> -->
  </div>
</template>

<style scoped>
/* ใช้ Tailwind CSS utility classes */
</style>