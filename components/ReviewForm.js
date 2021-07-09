app.component('review-form',{
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="question">Would you recommend this product?:</label>
        <p>
        <input type="radio" value="yes" v-model="question1">Yes</input>
        <input type="radio" value="no" v-model="question2">No</input>
        </p>

        <label for="review">Review:</label>
        <input id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <input type="submit" class="button" value="Submit">
    </form>
    `,
    data(){
        return{
            name: '',
            review: '',
            question1: '',
            question2: '',
            rating: null
        }
    },
    methods:{
        onSubmit() {
            if( this.name === '' || this.review === '' || this.rating === null){
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                question1: this.question1,
                question2: this.question2,
                rating: this.rating,
            }
            console.log(productReview)
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.question1 = ''
            this.question2 = ''
            this.rating = null
        }
    }
})
