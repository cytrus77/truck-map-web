import { component } from 'web-cell';

import template from './index.html';

import style from './index.less';

import { districtOf } from '../service/map';

import { submit } from '../service/truck';

var province;

export default class PageTruck extends HTMLElement {
    constructor() {
        super().buildDOM(template, style);
    }

    async connectedCallback() {
        province = province || (await districtOf());

        this.view.province.render(province);

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
            await submit(event.target);
        } catch (error) {
            window.alert(error.message);
        }
    }
}

component(PageTruck);
