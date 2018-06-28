
const CounterReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCRE':
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case 'DECRE':
            return Object.assign({}, state, {
               count: state.count - 1
            });
        default:
            return state;
    }
}

export default CounterReducer;