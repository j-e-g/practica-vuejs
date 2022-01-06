const app = Vue.createApp({
  data() {
    return {
      titulo: "Prueba de VueJS",
      vueLink: "https://vuejs.org/",
      contador:0,
      nombre:"",
      nro_tarjeta:"",
      fecha_vencimiento:"",
      cod_seguridad:""
    };
  },

  methods: {
    alerta() {
      alert("hola");
    },
    sumar() {
      this.contador = this.contador + 1;
    },
    restar() {
      this.contador -= 1;
    },
    reset() {
      this.contador = "";
      this.contador = 0;
    }
  }
}).mount("#app");