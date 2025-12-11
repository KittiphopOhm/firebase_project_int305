<script setup>
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import db from '../../firebase/init'
import { useRouter } from 'vue-router'

const brands = ref([])
const username = ref('')
const router = useRouter()
const isMenuOpen = ref(false)

const fetchBrnads = () => {
    const brandColl = collection(db, "brands")
    const qry = query(brandColl, orderBy("name", "asc"))
    onSnapshot(qry, (snapshot) => {
        brands.value = []
        snapshot.forEach((doc) => {
            let data = doc.data()
            data.id = doc.id
            brands.value.push(data)
        })
    })
}

const fetchUserFromSession = () => {
    username.value = sessionStorage.getItem("username")
    console.log(username.value);
}

const logout = () => {
    if (username.value) {
        sessionStorage.removeItem("username")
        sessionStorage.removeItem("email")
        username.value = ''
        router.push({name: 'ProductList'})
    }
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
}

onMounted(() => {
    fetchBrnads()
    fetchUserFromSession()
})

</script>

<template>
    <div class="w-full h-full">
        <div class="w-full bg-gray-50 p-3 fixed top-0 left-0 z-50">
            <div class="w-full hidden lg:flex justify-center items-center gap-x-6">
                <router-link :to="{ name: 'ProductList' }">
                    <p class="font-semibold text-[14px]">Sound Shop</p>
                </router-link>

                <div v-for="(brand, index) in brands" :key="index">
                    <router-link :to="{ name: 'ProductListBrand', params: { brand: brand.name } }">
                        <button class="cursor-pointer text-[14px]">{{ brand.name }}</button>
                    </router-link>
                </div>

                <router-link :to="{name: 'OrderList'}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" fill-rule="evenodd" d="M8 7V6a4 4 0 1 1 8 0v1h3c.552 0 1 .449 1 1.007v12.001c0 1.1-.895 1.992-1.994 1.992H5.994A1.994 1.994 0 0 1 4 20.008v-12C4 7.45 4.445 7 5 7zm1.2 0h5.6V6a2.8 2.8 0 0 0-5.6 0zM8 8.2H5.2v11.808c0 .436.356.792.794.792h12.012a.794.794 0 0 0 .794-.792V8.2H16V11h-1.2V8.2H9.2V11H8z"/></svg>
                </router-link>
                <router-link v-if="!username" :to="{name: 'Signup'}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 20 20"><path fill="#000000" d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0Z"/></svg>
                </router-link>
                <div v-if="username">
                    <button class="btn rounded-2xl border-0 bg-gray-200 flex justify-center items-center" popovertarget="popover-1" style="anchor-name:--anchor-1">
                        {{ username }}
                    </button>
                    <ul class="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover id="popover-1" style="position-anchor:--anchor-1">
                        <li @click="logout"><a>Logout</a></li>
                    </ul>
                </div>
            </div>

            <div class="w-full lg:hidden flex justify-between items-center">
                <router-link :to="{ name: 'ProductList' }" @click="closeMenu">
                    <p class="font-semibold text-[14px]">Sound Shop</p>
                </router-link>

                <div class="flex items-center gap-x-4">
                    <router-link :to="{name: 'OrderList'}" @click="closeMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" fill-rule="evenodd" d="M8 7V6a4 4 0 1 1 8 0v1h3c.552 0 1 .449 1 1.007v12.001c0 1.1-.895 1.992-1.994 1.992H5.994A1.994 1.994 0 0 1 4 20.008v-12C4 7.45 4.445 7 5 7zm1.2 0h5.6V6a2.8 2.8 0 0 0-5.6 0zM8 8.2H5.2v11.808c0 .436.356.792.794.792h12.012a.794.794 0 0 0 .794-.792V8.2H16V11h-1.2V8.2H9.2V11H8z"/></svg>
                    </router-link>
                    <button @click="toggleMenu" class="p-2 cursor-pointer">
                        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M3 12h18M3 18h18"/>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div v-if="isMenuOpen" class="lg:hidden w-full bg-gray-50 mt-3 pt-3 border-t border-gray-200">
                <div class="flex flex-col gap-y-3 pb-3">
                    <div v-for="(brand, index) in brands" :key="index">
                        <router-link :to="{ name: 'ProductListBrand', params: { brand: brand.name } }" @click="closeMenu">
                            <button class="cursor-pointer text-[14px] w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                                {{ brand.name }}
                            </button>
                        </router-link>
                    </div>

                    <div class="border-t border-gray-200 pt-3 px-2">
                        <router-link v-if="!username" :to="{name: 'Signup'}" @click="closeMenu">
                            <button class="flex items-center gap-x-2 text-[14px] py-1 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 20 20"><path fill="#000000" d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0Z"/></svg>
                                <span>Sign Up</span>
                            </button>
                        </router-link>
                        <div v-if="username" class="flex flex-col gap-y-2">
                            <p class="text-[14px] font-semibold">{{ username }}</p>
                            <button @click="logout(); closeMenu()" class="text-[14px] text-left py-1 cursor-pointer hover:bg-gray-100 rounded">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-10"></div>
    </div>

</template>

<style scoped>
</style>