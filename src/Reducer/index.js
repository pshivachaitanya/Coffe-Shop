import { combineReducers } from "redux";
import tablereducer from "./tablereducer";
import filterreducer from "./filterreducer"
import orderreducer from "./ordereducer";


const reducer=combineReducers({
    tablereducer:tablereducer,
    filterreducer:filterreducer,
    orderreducer:orderreducer
})

export default reducer
