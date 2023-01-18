const { createApp } = Vue

createApp({
  data() {
    return {
      controls: {
        showAnimated: false,
      },
    }
  },
}).mount('#appVue')
