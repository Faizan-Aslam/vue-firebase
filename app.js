const app = Vue.createApp({
    // data, functions
    data(){
        return{
            showBooks: true,
            books: [
                { title: "name of the wind", author: "patrick rothfuss", img: "images/1.jpg" },
                { title: "the way of the kings", author: "brandon sanderson", img: "images/2.jpg"  },
                { title: "the final empire", author: "brandon sanderson", img: "images/3.jpg" }
            ],
            x:0,
            y:0,
        }
    },
    methods: {
    toggleShowBooks(){
        this.showBooks= !this.showBooks 
    },
    handleEvent(e, data){
        console.log(e, e.type)
        if (data){
            console.log(data)
        }
    },
    handleMousemove(){
        this.x = e.offsetX
        this.y = e.offsetY
    }

}
})
  
app.mount('#app') 