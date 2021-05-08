import { SatelliteSharp } from "@material-ui/icons"

let istate = {
    name: 'mini',
    message: 'to be received',
    items: []

}
const reducer = (state = istate, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case "CHANGE_NAME":
            return {
                ...state, name: action.payload
            }
        case "ADD_MESSAGE":
            return {
                ...state, message: action.payload
            }
        case "GET_LIST":
            return {
                ...state, items: action.payload.data
            }
        case "ADD_EMP":
            return {
                ...state, items: [...state.items, action.payload]
            }
        case "DEL_EMP":
            const newitem = state.items.filter((row) => row.qci_id !== action.payload)
            return {
                ...state, items: [...newitem]
            }
        // case "UPDATE_EMP":
        //     const newitem = state.items.filter((row) => row !== action.payload)
        //     return {
        //         ...state, items: [...state.items, action.payload]
        //     }
        default:
            return state
    }


}
export default reducer
