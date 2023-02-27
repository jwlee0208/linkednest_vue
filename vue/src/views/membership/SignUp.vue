<template>
    <v-container>
        <h1>::: Sign Up :::</h1>
        <hr/>
        <br/>    
        <v-form ref="form">
            <v-row class="pl-5 pr-5">
                <v-text-field v-model="username" type="email" id="username" name="username" label="E-Mail" :rules="emailRule" outlined></v-text-field>
            </v-row>
            <v-row class="pl-5 pr-5">
                <v-text-field v-model="password" type="password" id="password" name="password" label="PASSWORD" :counter="10" :rules="passwordRule"></v-text-field>
            </v-row>    
            <v-row class="pl-5 pr-5">
                <v-text-field v-model="nickname" id="nickname" name="nickname" label="Nickname"></v-text-field>
            </v-row>
            <v-row>
                <v-col v-for="n in 1" :key="n">
                    <v-btn block @click="validForm" tile color="warning" class="mr-4">Validate</v-btn>                
                </v-col>
                <v-col v-for="n in 1" :key="n">
                    <v-btn block @click="submitForm" tile outlined color="success" class="mr-4" ><v-icon left>mdi-pencil</v-icon>SignUp</v-btn>        
                </v-col>        
            </v-row>    
        </v-form>
    </v-container>
</template>

<script>
import { registUser } from '@/api/index.js';
import { validEmailAddr} from '@/utils/validation.js';

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
        submitForm() {

            console.log('username' + this.username);
            try {
                const userData = {
                    username : this.username,
                    password : this.password,
                    nickname : this.nickname
                }
                const {data} = registUser(userData);
                console.log('response:' + data);
            } catch (error) {
                this.logMessage = error.response.data;        
            } finally {
                this.initForm();
            }
            
        },
        initForm() {
            this.username = '';
            this.password = '';
            this.nickname = '';
        },
        validForm() {
            this.$refs.form.validate()
        }
        
    },
    computed: {
        isUsernameValid() {
            return validEmailAddr(this.username);
        }
    }
}
</script>