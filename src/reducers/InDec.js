
const initialState = 0;

const handleClicks  = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            if(state === 0) return state;
            return state - 1;
        default :
            return state;
    }
}

export default handleClicks;