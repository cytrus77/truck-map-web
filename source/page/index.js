import { currentUser, navTo, signIn } from './service/truck';

const CellRouter = customElements.get('cell-router');

CellRouter.route('signIn', (parameter, to, from) => {
    console.info(parameter, to, from);
});

const drawer = document.querySelector('cell-drawer');

document
    .querySelector('.mdl-layout__drawer-button')
    .addEventListener('click', drawer.open.bind(drawer));

document
    .querySelector('cell-header > span')
    .addEventListener('click', () => (window.location = '.'));

document.addEventListener('signIn', event => signIn(event.detail));

(async () => {
    try {
        const user = await currentUser();

        signIn(user);

        navTo(user.car[0] ? 'route' : 'truck');
    } catch (error) {
        if (error.code === 401) {
            navTo('signIn');
        } else {
            window.alert(error.message);
        }
    }
})();
