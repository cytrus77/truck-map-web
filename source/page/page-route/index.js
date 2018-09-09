import { component } from 'web-cell';

import template from './index.html';

import { searchCoord, currentCoord } from '../service/map';

const during = [];

export default class PageRoute extends HTMLElement {
    constructor() {
        super().buildDOM(template);
    }

    connectedCallback() {
        this.on.call(
            this.shadowRoot,
            'submit',
            'form',
            this.onSubmit.bind(this)
        );

        document.onvisibilitychange = () => {
            if (document.visibilityState === 'hidden') {
                this.toggle(true);
            } else if (window.confirm('Do you want to end the journey?'))
                this.toggle();
        };
    }

    disconnectedCallback() {
        document.onvisibilitychange = null;
    }

    async onSubmit(event) {
        event.preventDefault();

        const form = event.target.elements,
            current = await currentCoord();

        const coord = await Promise.all([
            searchCoord(form.destination.value, current.adcode),
            searchCoord(form.waypoint.value, current.adcode)
        ]);

        this.showRoute(
            current.rectangle[0],
            coord[0].location,
            coord[1].location
        );
    }

    showRoute(from, to, via) {
        const frame = this.$('iframe')[0];

        frame.src = `//uri.amap.com/navigation?${new URLSearchParams({
            from: `${from},Start point`,
            to: `${to},End point`,
            via: `${via},Middle point`,
            callnative: 0
        })}`;
    }

    toggle(start) {
        during[start ? 0 : 1] = Date.now();
        console.info(during);
        return false;
    }
}

component(PageRoute);
