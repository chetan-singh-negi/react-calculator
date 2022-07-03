import React from 'react';
import OutputScreenRow from './outputScreenRow';
function OutputScreen(props){
    return(
        <div className='screen'>
        <OutputScreenRow value={props.value1} />
        <OutputScreenRow value={props.value2}/>
        </div>
    )
}
export default OutputScreen; 