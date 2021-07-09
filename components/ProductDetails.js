app.component('product-details',{
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:
        /*html */
        `<div class="product-details">
        <div class="product-container">
            <div class="product-info">
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
            </div>
        </div>
    </div>`,
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
})