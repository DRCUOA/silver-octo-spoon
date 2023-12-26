const app =  Vue.createApp({
  data() {
    return {
      title: "Show Events",
      tickets: 50,
      image: "./assets/sample-img.jpeg",
      details: ["Comedy", "Musical", "Satire", "GameShow", "Book Reading"],
      cart: 0
    }
  },
  methods: {
    updateCart() {
      cart++;
      tickets--;
    }
  }
});