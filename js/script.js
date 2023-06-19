console.log(`Vue ok`,Vue);

const { createApp } = Vue;

const app = createApp({
    data() {
        return{
            autoPlay: 0,
            currentIndex : 0,
            images : [
                {
                    image: 'img/sfondo1.jpg',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/sfondo2.jpg',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/sfondo3.jpg',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/sfondo4.jpg',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/sfondo5.jpg',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ], 
        }
    },
    computed: {
        lastImage(){
            return this.currentIndex === this.images.length -1
        }
    },
    methods: {
        goNext(){
            if(this.lastImage) this.currentIndex = 0;
            this.currentIndex++;
        },
        goPrev(){
            this.currentIndex--;
        },
        currentIndex(targetIndex){
            this.currentIndex = targetIndex;
        }
    },
    mounted(){
       this.autoPlay = setInterval(this.goNext, 2500)
    }
});

app.mount(`#root`);