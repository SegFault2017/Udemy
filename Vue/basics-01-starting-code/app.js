const app = Vue.createApp({
    data() {
        return {
            courseGoal: "<h2>Finsh the course and learn Vue.</h2>",
            person: {
                name: "Raymond"
            },
            vueLink: "https://youtube.com"
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return "Learn Vue";
            }
            return "Master Vue!"
        }
    }
});
app.mount('#user-goal');