export const GET_USERS='GET_USERS'
export const CHANGE='CHANGE'

export const getUsers=(arr)=>{
    return{
        type:GET_USERS,
        payload:arr
    }
}
export const changeUsers=(user)=>{
    return{
        type:CHANGE,
        payload:user
    }
}