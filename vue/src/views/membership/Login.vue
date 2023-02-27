<template>
    <v-container>
        <h1>::: Sign In :::</h1>
        <hr/>
        <br/>
        <v-form ref="form">
            <v-row class="pl-5 pr-5">
                <v-text-field v-model="username" type="email" id="username" name="username" label="E-Mail" :rules="emailRule" outlined></v-text-field>
            </v-row>
            <v-row class="pl-5 pr-5">
                <v-text-field v-model="password" type="password" id="password" name="password" label="PASSWORD" :counter="10" :rules="passwordRule"></v-text-field>
            </v-row>
            <v-row>
                <v-col v-for="n in 1" :key="n">
                    <v-btn block @click="submitForm" tile outlined color="success" class="mr-4" ><v-icon left>mdi-pencil</v-icon>Login</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
import router from '@/router';
import { login } from '@/api/index.js';
// import { login } from '@/store/signin.js';
import { validEmailAddr } from '@/utils/validation.js';
import VueCookies from 'vue-cookie';
import {createStore} from 'vuex';
import {userStore} from '@/store/signin.js';

const regext = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default {
    valid: true,
    name : 'regist',
    data: () => ({
        username: '',
        emailRule: [
            v => !!v || 'Email is required',
            v => regext.test(v) || 'Email is not valid',
        ],
        password:'',
        passwordRule:[
            v => !!v || 'Please Input Password',
            v => (v && (v.length > 8 && v.length < 16)) || 'Password Length Need Between 8 And 16 Digits',
        ]
    }),
    methods: {
        async submitForm() {
            console.log('username' + this.username);
            try {
                const userData = {
                    username : this.username,
                    password : this.password,
                }

                login(userData).then(res => {
                    if (res.status == 200) {
                        VueCookies.set('token', res.data.token);
                        this.$router.push('/');
                    }
                });
                // console.log('login result : ' + login(userData));
                                
            } catch (error) {
                // this.logMessage = error.response.data;
            } finally {
                this.initForm();
            }

        },
        initForm() {
            this.username = '';
            this.password = '';
        }
    },
    computed: {
        isUsernameValid() {
            return validEmailAddr(this.username);
        }
    }
}
</script>