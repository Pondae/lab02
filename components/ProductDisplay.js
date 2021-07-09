app.component('product-display',{
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
        details:{
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img :src="image" :disabled='!inStock' :class="{'out-of-stock-img': !inStock} ">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{shipping}}</p>
            <product-details :details="details"></product-details>
            <div v-for="(variant,index) in variants" :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{backgroundColor: variant.color}"></div>
            <button class=" button " :disabled='!inStock' 
            :class="{disabledButton: !inStock} " @click="addToCart ">Add to Cart</button>
            <button class=" button " @click="removeFromCart ">Remove</button>
            <review-form @review-submitted="addReview"></review-form>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        </div>
    </div>
</div>`,
    data() {
        return {
            product: 'Shoes',
            brand: 'SE 331',
            inventory: 100,
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 5 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            selectedVariant: 0,
            onSale: true,
            reviews:[]
        }
    },
    methods: {
        addToCart() {
            if(this.variants[this.selectedVariant].quantity != 0){
                this.$emit('add-to-cart',)
                this.variants[this.selectedVariant].quantity = this.variants[this.selectedVariant].quantity - 1
            }
        },
        removeFromCart() {
            this.$emit('remove-from-cart',)
            this.variants[this.selectedVariant].quantity = this.variants[this.selectedVariant].quantity + 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        addReview(review){
            this.reviews.push(review)
        }
    },
    computed: {
        title(){
            if(this.onSale){
                return this.brand + ' ' +this.product + ' is on sale'
            }
            else{
                return this.brand + ' ' + this.product
            }
        },
        image(){
            return this.variants[this.selectedVariant].image;
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity;
        },
        shipping(){
            if(this.premium){
                return 'Free'
            }
            return 30
        }
    }
})