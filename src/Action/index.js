export const settablenumber=(value)=>async dispatch=>{
    dispatch({
        type:"SETTABLENUMBER",
        payload:value

    })
}

export const resettablenumber=()=>async dispatch=>{
    dispatch({
        type:"RESETTABLENUMBER"
    
   })
}


export const setfilter=(value)=>async dispatch=>{
    dispatch({
        type:"SETFILTER",
        payload:value

    })
}

export const resetfilter=()=>async dispatch=>{
    dispatch({
        type:"SETFILTER"

    })
}

export const addorder=(id,name,prize,table_number,image)=>async dispatch=>{
    dispatch({
        type:'ADDORDER',
        payload:{
            id:id,
            name:name,
            pize:prize,
            table_number:table_number,
            image:image
        }
    })
}