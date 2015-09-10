import element from 'dekujs/virtual-element';
import { deku, render } from 'dekujs/deku';
import {{ name }} from '../lib';

let app = deku(<div style="display:block;text-align:center;">
  <{{ name }}>
  </{{ name }}>
</div>);

render(app, document.querySelector('main'));
