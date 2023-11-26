const app = Vue.createApp({
    data() {
        return {
            showBooks : true,
            books:[
                {
                    title : 'The Final Empire',
                    author : 'Me',
                    age : '45',
                    isFav: true
                },
                {
                    title : 'The Final Assassination',
                    author : 'Me kong',
                    age : '55',
                    isFav: true
                },
                {
                    title : 'Harry Potter',
                    author : 'bla bla bla',
                    age : '65',
                    isFav: false
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
        toggleChangeColor($event, book){
            book.isFav = !book.isFav;
            console.log('change color');
            console.log(book);
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
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book)=> book.isFav)
        }
    }
})

app.mount('#app')