app.component('footer-banco', {
    name: 'Footer',
    props: {
        anio: {
            type: Number,
            default: 2022
        }
    },
    data() {
        return {
            texto: 'Francisco Marin - Todos los derechos reservados'
        }
    },
    template:/*html*/`
    <div class="bg-dark py-3 mt-2 text-sm text-white text-center">
        <p> {{ anio }} {{ texto }}</p>
    </div>
    `,
});