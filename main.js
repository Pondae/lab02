const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            details: ['Naruto', 'Bleach', 'Reborn', 'Berserk', 'Conan'],
        }
    },
    methods: {
        updateCart(count){
            this.cart.push(count);
        }
    },
    computed: {

    }
})