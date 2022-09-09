import './components/index.js';
import MyProfile, { Attributes } from './components/profile/profile.js';

class AppContainer extends HTMLElement {

    profile: MyProfile;

    constructor() {
        super();
        this.attachShadow ({ mode: 'open' });
        this.profile = this.ownerDocument.createElement('my-profile') as MyProfile;
        this.profile.setAttribute(Attributes.age, '23');
        this.profile.setAttribute(Attributes.name, 'felipe');
        this.profile.setAttribute(Attributes.lastname, 'gomez');
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = 'hola desde componente';
            this.shadowRoot.appendChild(this.profile);
        }   
    }
}

customElements.define('app-container', AppContainer);
