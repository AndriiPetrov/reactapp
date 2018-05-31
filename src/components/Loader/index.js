import React from 'react';
import LoaderSrc from './favicon.ico';

const Loader = props => (
    <div>
        <img
            style={{width: 30}}
            alt="Loader icon"
            src={LoaderSrc} />
    </div>
);

export default Loader;