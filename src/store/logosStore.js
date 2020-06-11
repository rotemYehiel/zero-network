import dataService from '../services/dataService'


export default {
    state: {
        logos: null
    },
    getters: {
        logos(state) {
            return state.logos;
        },
    },
    mutations: {
        setLogos(state, { logos }) {
            state.logos = logos;
        }
    },
    actions: {
        loadLogos(context) {
            const logos = dataService.getLogos(context);
            console.log('logos in store:', logos)
            context.commit({ type: 'setLogos', logos });
            return logos;
        }
    },
}
