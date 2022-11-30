import React from 'react';
import classnames from 'class-names';

function LeftSide({children, className, style}) {
    return (
        <div className={classnames('left-side-wrapper', className)} style={style}>
            {children}
        </div>
    )
}

export default LeftSide;
