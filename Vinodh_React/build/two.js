console.log("in two ");
import { compute } from './one.js'; /// named import in braces{ }
function process() {
    console.log("in two process");
    compute(3, 4);
}
export default process; // default export
