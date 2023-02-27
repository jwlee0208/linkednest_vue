import { createStore } from 'vuex';
import { authStore } from '@/store/modules/signin';
import CreatePersistedState from 'vuex-persistedstate';


export default createStore ({
    modules : { authStore }
})

/* Vue.use(Vuex);

import signin from '@/store/signin'

const store = new Vuex.Store({
    modules: {
        signin : signin        
    },
    plugins : [CreatePersistedState({
        paths : ["signStore"]
    })]
})

export default store */