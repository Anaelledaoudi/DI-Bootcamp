export const increase=(value)=>{
    return{
        type:'INCREASE_COUNT',
        payload:value
    }
}
export const decrease=(value)=>{
    return{
        type:'DECREASE_COUNT',
        payload:value
    }
}