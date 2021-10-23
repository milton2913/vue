const app = Vue.createApp({

    //data, functions
    // template: '<h2> I am the template</h2>'
    
    data: function(){
        return {
            title:'History of Bangladesh',
            author:'Kamal',
            age:26,
            c:0,
            bookShow:true,
            x:0,
            y:0
        }
    },
    methods:{
        changeTitle(title){
            this.title="Bangladesh big bigtory at 1971 "
        },

        showBooksToggle(){
            this.bookShow=!this.bookShow
        },
        handelEvent(e, data){
            console.log(e,e.type)
            if(data){
                console.log(data)
            }
        },
        handelMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        deptEdit(data){
            if(data==1){
               console.log('dhaka')
            }
            console.log(data)
        }
}
})

app.mount('#app')