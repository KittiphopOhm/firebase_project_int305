<script setup>
import LoginSignupView from './view/LoginSignupView.vue';
import db from '../../firebase/init';
import bcrypt from "bcryptjs"
import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import { useRoute, useRouter } from 'vue-router';
import Alert from './Alert.vue';
import { ref } from 'vue';

const router = useRouter()
const isShow = ref(false)
const title = ref('')
const isSuccessfully = ref('')
const resetForm = ref(false)
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
                    router.push({ name: 'Login' })
                }, 1500)
            }
        } else {
            isShow.value = true
            title.value = "Email is already associated with an account."
            isSuccessfully.value = "No"
            resetForm.value = true
            setTimeout(() => {
                isShow.value = false
                title.value = ""
                isSuccessfully.value = ""
                resetForm.value = false
            }, 1500)
        }
    }
}

const login = async (user) => {
    const accountRef = collection(db, "accounts")
    const qry = query(accountRef, where("email", "==", user.email))
    const accountDoc = await getDocs(qry)
    accountDoc.forEach(async (doc) => {
        let data = doc.data()
        data.id = doc.id
        const isMatch = await bcrypt.compare(user.password, data.password)
        if (isMatch) {
            sessionStorage.setItem("username", data.username)
            sessionStorage.setItem("email", data.email)
            router.push({ name: 'ProductList' })
        } else {
            isShow.value = true
            title.value = "Username Password is not valid"
            isSuccessfully.value = "No"
            resetForm.value = true
            setTimeout(() => {
                isShow.value = false
                title.value = ""
                isSuccessfully.value = ""
                resetForm.value = false
            }, 1500)
        }
    })
}

</script>

<template>
    <div>
        <Alert :isShow="isShow" :title="title" :isSuccessfully="isSuccessfully" />
        <LoginSignupView @register="register" @login="login" :isReset="resetForm" />
    </div>
</template>