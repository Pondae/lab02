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
        },
        removeCart(count){
            let index = this.cart.indexOf(count);
            this.cart.splice(index, 1)
        }
    },
    computed: {

    }
})