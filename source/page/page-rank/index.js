import { component } from 'web-cell';

import template from './index.html';

export default class PageRank extends HTMLElement {
    constructor() {
        super().buildDOM(template);
    }

    async connectedCallback() {
        this.$('tbody')[0].innerHTML = [
            { name: 'test', score: 10 },
            { name: 'example', score: 9 }
        ]
            .map(
                item =>
                    `<tr><td></td><td>${item.name}</td><td>${
                        item.score
                    }</td></tr>`
            )
            .join('\n');
    }
}

component(PageRank);
