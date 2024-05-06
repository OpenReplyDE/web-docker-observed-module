import "./observed-module.css";

export const html = `
  <div class="card" >
    <h1>Observed Module</h1>
    <p>Assets for observed modules are initially not injected in page. An observation mechanism examines the page for frequent updates and injects the assets only if the custom elements associated with the module are present on the page</p>
  </div>
`;
class ObservedModule extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}

if (!window.customElements.get("observed-module")) {
  window.customElements.define("observed-module", ObservedModule);
} else {
  console.warn("Observed Module already defined");
}
