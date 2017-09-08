export default function inputReducer(state = "", action){
    switch (action.type){
        case 'SEND':
            return state.concat(action.value);
        default:
            return state;
    }
}
