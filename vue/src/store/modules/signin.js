/* import router from "@/router"
import axios from "axios";
import vueCookie from 'vue-cookie';
import vuex from 'vuex';

 */
import router from "@/router";
import axios from "axios";
import vueCookie from 'vue-cookie';
// import {axiosCall} from '@/axios/index.js'

const axiosCall = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

export const authStore = {
    state : {
        accessToken : '',
        refreshToken : ''
    },
    mutations : {
        loginToken (state, payload) {
            vueCookie.set('accessToken', payload.token, '60s');
            state.accessToken = payload.token;
        }, 
        refreshToken (state, payload) {
            vueCookie.set('accessToken', payload.token, '60s');
            state.accessToken = payload.token;
        },
        removeToken () {
            vueCookie.removeToken('accessToken');
            // vueCookie.removeToken('refreshToken');
        },
    },
    getters: {
        getToken(state) {
            let at = vueCookie.get('accessToken');
            return {
                access : at
            };
        }
    },
    actions : {
        login (state, params) {
            axiosCall.post('/login', params).then(res => {
                this.commit('loginToken', res.data.token);
                router.push("/");
            })                
        },        
        refreshToken : ({commit}) => {
            return new Promise((resolve, reject) => {
                axiosCall.post('/refreshToken', params).then(res => {
                    commit('refreshToken', res.data.token);
                    resolve(res);
                })        
            });
        },
        logout : ({commit}) => {
            commit('removeToken');
            location.reload();    
        }
    }
};

// export default authStore