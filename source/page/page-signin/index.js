import { component } from 'web-cell';

import template from './index.html';

import style from './index.css';

import { submit, navTo } from '../service/truck';

export default class PageSignin extends HTMLElement {
    constructor() {
        super().buildDOM(template, style);
    }

    connectedCallback() {
        this.on.call(
            this.shadowRoot,
            'submit',
            'form',
            this.onSubmit.bind(this)
        );
    }

    async onSubmit(event) {
        event.preventDefault();

        try {
            const user = await submit(event.target);

            this.dispatchEvent(
                new CustomEvent('signIn', {
                    bubbles: true,
                    detail: user
                })
            );

            await navTo('truck');
        } catch (error) {
            window.alert(error.message);
        }
    }
}

component(PageSignin);
