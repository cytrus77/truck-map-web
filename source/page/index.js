const CellRouter = customElements.get('cell-router');

CellRouter.route('signIn', (parameter, to, from) => {
    console.info(parameter, to, from);
});

const drawer = document.querySelector('cell-drawer');

document
    .querySelector('.mdl-layout__drawer-button')
    .addEventListener('click', drawer.open.bind(drawer));
