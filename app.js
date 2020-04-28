var app = new Vue({
    el: '#app',
    data: {
        name: "Clifford",
        burgerOpen: false,
    },

    methods: {
        burgerDisplay(){
            if (this.burgerOpen === false){
                return this.burgerOpen = true
            }
            else if (this.burgerOpen === true){
                return this.burgerOpen = false
            }
        }
    }
})