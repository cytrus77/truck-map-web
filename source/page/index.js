const CellRouter = customElements.get('cell-router');


CellRouter.route('signIn',  (parameter, to, from) => {

    console.info(parameter, to, from);
});
