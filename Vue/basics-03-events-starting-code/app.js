const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
    },
    confirmed() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
