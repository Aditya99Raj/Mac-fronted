import axios from "axios";

export const GETMIDDISDATA = "GETMIDDISDATA";

export const MiddisData = (payload) => ({

    type : GETMIDDISDATA,
    payload : payload
})

export const getMiddisData = () => (dispatch) => {

    axios.get("https://mac-project-backend.herokuapp.com/middis").then((res) => {
        dispatch(MiddisData(res.data))
    })
}