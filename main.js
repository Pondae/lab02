const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true,
            details: ['Naruto', 'Bleach', 'Reborn', 'Berserk', 'Conan'],
        }
    },
    methods: {
        updateCart(){
            this.cart += 1;
        }
    },
    computed: {

    }
})