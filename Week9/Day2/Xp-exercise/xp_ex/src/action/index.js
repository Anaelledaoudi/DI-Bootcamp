export const SUBMIT='SUBMIT';
export const DELETE='DELETE';

export const submit_data=(detail)=>{
    return{
        type:SUBMIT,
        payload:details
    }
}

export const delete_account=()=>{
    return{
        type:DELETE
    }
}
