const app = Vue.createApp({
    data() {
        return {
            titulo: 'Mi Banco 1.0',
            cantidad: 200,
            enlance: 'https://youtube.com',
            estado: false,
            servicios: ['giros', 'tranferencias', 'pagos', 'cheques'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad += 100;
        },
        disminuirSaldo(valor) {
            if (this.cantidad === 0) {
                this.desactivar = true;
                alert('Se agotó el saldo');
                return;
            }
            this.cantidad -= valor;
        }
    }
});