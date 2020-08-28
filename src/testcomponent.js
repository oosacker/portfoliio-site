import React, {   
    useState, 
    useEffect,
    useContext
} from 'react';

import { testContext } from './pages/projects';



const TestComponent = (props) => {
    
    const data = useContext(testContext);

    return (
        <p>{data}</p>
    )
}

export default TestComponent;
