const app = Vue.createApp({
    name: 'BancoApp',
    data() {
        return {
            titulo: 'Mi Banco 1.0',
            cantidad: 600,
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
    },
    computed: {
        colorTexto() {
            return this.cantidad > 500 ? 'text-success' : 'text-danger';
        },
        textUppercase() {
            return this.titulo.toUpperCase();
        },
        anio() {
            let anioActual = new Date().getFullYear();
            return anioActual;
        }
    },
});