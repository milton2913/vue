const app = Vue.createApp({

    //data, functions
    // template: '<h2> I am the template</h2>'
    
    data: function(){
        return {
            title:'History of Bangladesh',
            author:'Kamal',
            age:26,
            c:0,
            bookShow:true
        }
    },
    methods:{
    //     changeTitle(title){
    //         this.title="Bangladesh big bigtory at 1971 "
    // }

showBooksToggle(){
    this.bookShow=!this.bookShow
}
}
})

app.mount('#app')