const initState={
    post: [{
        name: "divya shankar anand",
        age: "22",
        belt: "blue",

    }, {
        name: "sonu kumar",
        age: "25",
        belt: "black",

    }]
}
const rootreducer=(state=initState,action)=>{
    if (action.type==="ADD_POST") {
       const data=state.post;
        data.push(action.body);
        return {
            ...state,
            post:data};
    // console.log(action);
    }
    return state;
}
export default rootreducer;