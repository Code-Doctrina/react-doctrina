import React from 'react';

const withClass = (WrappedComponent, className)  => {
   // console.log("[Props in withClass.js]", WrappedComponent);
    return props => (
       
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;