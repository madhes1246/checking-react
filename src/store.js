import createStore from 'redux'

function counterReducer(state,action){
    switch(action.type){
        case 'counter/increment':return{value: state.value+1}
        case 'counter/decrement' : return{value: state.value-1}
         default: return state

    }   
}
let store= createStore(counterReducer)

store.subscribe(()=>console.log(store.getState()))

store.dispatch({type: 'counter/increment'})