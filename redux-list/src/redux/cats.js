const initialState ={
    data: []
}

const catReducer =(state=initialState, action) =>{
    switch (action.type){
        case 'ADD_CAT':
        return{
            data: [...state.data, action.cat]
        }
        case 'REMOVE_CAT':
        return{
            data: state.data.filter((cat, index) => index !== action.index)

            } 
        case "EDIT_CAT":
            return{
                data:state.datamap((cat, i) => {
                    if(i === action.index){
                        return action.newCat;
                    }else{
                        return cat;
                    }
                })
            }
        default:
            return state;
    }
}

export const addCat = cat =>{
    return{
        type:'ADD_CAT',
        cat
    }
}

export const removeCat = index => {
    return{
        type : 'REMOVE_CAT',
        index
    }
}

export const editCat = (cat) => {
    return {
        type: "EDIT_CAT",
        cat
    }
}

export default catReducer;