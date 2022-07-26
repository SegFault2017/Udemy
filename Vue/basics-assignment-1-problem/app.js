const app = Vue.createApp({
    data() {
        return {
            name: "Raymond",
            age: 26,
            img: "https://cdn.vox-cdn.com/thumbor/i_-K5Ar4jIILk85h_hX2Slg7yX0=/0x0:2000x1125/1310x737/cdn.vox-cdn.com/uploads/chorus_image/image/70635271/ncaa_copy.0.png"
        }
    },
    methods: {
        favNumber() {
            return Math.random();
        }
    }
})
app.mount('#assignment')