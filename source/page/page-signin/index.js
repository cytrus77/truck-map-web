import { component } from 'web-cell';

import template from './index.html';

import style from './index.css';

export default class PageSignin extends HTMLElement {
    constructor() {
        super().buildDOM(template, style);
    }

    connectedCallback() {
        this.on.call(this.shadowRoot, 'submit', 'form', this.onSubmit);
    }

    async onSubmit(event) {
        event.preventDefault();

        const form = event.target;

        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form)
        });

        if (response.status > 299) window.alert(response.statusText);
        else;
    }
}

component(PageSignin);
