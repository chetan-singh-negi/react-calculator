import React from 'react';
function OutputScreenRow(props){
    return(
        <div className='userScreen'>
            <input type="text"  readOnly value={props.value}/>
        </div>
    )
}
export default OutputScreenRow;