import axios from "axios";
import vueCookie from 'vue-cookie';
import {login} from 'vuex';

const axiosCall = axios.create({
    baseURL: process.env.VUE_APP_API_URL, 
});

export const userStore = {
    state : {
        host : 'http://127.0.0.1:9090',
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
            // let rt = vueCookie.get('refreshToken');
            
            return {
                access : at
                // access : at, refresh : rt
            };
        }
    },
    actions : {
        login : ({commit}, params) => {
            return new Promise((resolve, reject) => {
                axiosCall.post('/login', params).then(res => {
                    commit('loginToken', res.data.token);
                    resolve(res);    
                }).
                catch(err => {
                    reject(err.message);    
                })
            });
        },
        refreshToken : ({commit}) => {
            return new Promise((resolve, reject) => {

            });
        },
        logout : ({commit}) => {
            commit('removeToken');
            location.reload();    
        }
    }
}

export default userStore