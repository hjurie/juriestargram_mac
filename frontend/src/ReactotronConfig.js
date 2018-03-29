import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

Reactotron.configure({name: "juriestargram"})
    .use(reactotronRedux())
    .connect();


export default Reactotron;