import { component } from 'web-cell';

import template from './index.html';

import style from './index.less';

import { districtOf } from '../map';

var province;

export default class PageTruck extends HTMLElement {
    constructor() {
        super().buildDOM(template, style);
    }

    async connectedCallback() {
        province = province || (await districtOf());

        this.view.province.render(province);
    }
}

component(PageTruck);
