const app = Vue.createApp({
    data() {
        return {
            showBooks : true,
            books:[
                {
                    title : 'The Final Empire',
                    author : 'Me',
                    age : '45',
                },
                {
                    title : 'The Final Assassination',
                    author : 'Me kong',
                    age : '55',
                },
                {
                    title : 'Harry Potter',
                    author : 'bla bla bla',
                    age : '65',
                }
            ],
            x : 0,
            y : 0
        }
    },
    methods:{
        changeTitle(title){
            console.log('You clicked this');
            this.title = title;
        },

        toggleshowbooks(){
            this.showBooks=!this.showBooks;
        },
        handleEvents(e, data){
            console.log('mouse over event');
            console.log(e , e.type);
            if(data!=null){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})

app.mount('#app')