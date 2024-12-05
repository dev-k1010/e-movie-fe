import React from 'react';
import { useHeightContext } from '../../context/HeightHeaderContext';


const Spacer = () => {
    const { heightHeader } = useHeightContext();

    return <div style={{ height: heightHeader }} />;  // Spacer có chiều cao là heightHeader
};

export default Spacer;
