<script setup>
const props = defineProps({
    isShow: {
        type: Boolean
    },
    title: {
        type: String
    },
    isSuccessfully: {
        type: String
    }
})
</script>

<template>
    <div v-if="isShow" class="fixed top-20 right-0">
        <div v-if="isSuccessfully === 'Yes'" role="alert" class="alert alert-success rounded-r-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-10 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ title }}</span>
        </div>

        <div v-if="isSuccessfully === 'No'" role="alert" class="alert alert-error rounded-r-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-10 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ title }}</span>
        </div>
    </div>
</template>