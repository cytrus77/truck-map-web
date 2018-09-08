import { component } from 'web-cell';

import template from './index.html';


export default  class PageSignin extends HTMLElement {

    constructor() {  super().buildDOM( template );  }
}


component( PageSignin );
