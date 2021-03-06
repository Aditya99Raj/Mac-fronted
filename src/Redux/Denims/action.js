import axios from "axios";


export const GETDENIMSDATA = "GETDENIMSDATA";

export const DenimData = (payload) => ({

    type : GETDENIMSDATA,
    payload : payload
})

export const getDenimData = () => (dispatch) => {

    axios.get("https://mac-project-backend.herokuapp.com/denims").then((res)=>{
        dispatch(DenimData(res.data))
    })
}