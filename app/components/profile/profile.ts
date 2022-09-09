export enum Attributes {
    name = 'name',
    lastname = 'lastname',
    age = 'age',
}

class MyProfile extends HTMLElement {

    name?: string;
    lastname?: string;
    age?: number;

    static get observedAttributes() {
        const attri: Record<Attributes, null> = {name: null, age: null, lastname: null};
        return Object.keys(attri);
    }

    attributeChangedCallback(propName: Attributes, _: string, newValue: string | undefined) {
        switch (propName) {
        case Attributes.age:
            this.age = newValue? Number(newValue) : 0;
            break;

        default:

            this[propName] = newValue;
            break;
        }
        this.render();
    }

    constructor() {
        super();
        this.attachShadow ({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            ${this.name}
            ${this.age}
            ${this.lastname}
            `;
        }
    }
}

customElements.define('my-profile', MyProfile);

export default MyProfile;