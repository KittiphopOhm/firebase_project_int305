<script setup>
import LoginSignupView from './LoginSignupView.vue';
import db from '../../firebase/init';
import bcrypt from "bcryptjs"
import { addDoc, collection, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import { useRoute, useRouter } from 'vue-router';
import Alert from './Alert.vue';
import { ref } from 'vue';

const router = useRouter()
const route = useRoute()

const isShow = ref(false)
const title = ref('')
const isSuccessfully = ref('')
const register = async (user) => {
    if (user.password !== user.confirmPassword) {
        alert("Password not valid")
    } else {
        const accColl = collection(db, "accounts")
        const hashPassword = await bcrypt.hash(user.password, 10)
        const qry = query(accColl, where("email", "==", user.email))
        const accSnap = await getDocs(qry)
        if (accSnap.empty) {
            const createAcc = await addDoc(accColl, {
                username: user.username,
                email: user.email,
                password: hashPassword,
                createAt: serverTimestamp()
            })
            if (createAcc) {
                isShow.value = true
                title.value = "Register Successfully"
                isSuccessfully.value = "Yes"
                setTimeout(() => {
                    isShow.value = false
                    title.value = ""
                    isSuccessfully.value = "" 
                    router.push({name: 'Login'})
                }, 1500)
            }
        } else {
                isShow.value = true
                title.value = "Email exists!!"
                isSuccessfully.value = "No"
                setTimeout(() => {
                    isShow.value = false
                    title.value = ""
                    isSuccessfully.value = "" 
                }, 1500)
        }
    }
}

</script>

<template>
    <div>
        <Alert :isShow="isShow" :title="title" :isSuccessfully="isSuccessfully" />
        <LoginSignupView @register="register" />
    </div>
</template>