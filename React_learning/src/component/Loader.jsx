
import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="loader">
            <Oval
                height={80}
                width={80}
                color="#0583b3"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#0583b3"
                strokeWidth={2}
                strokeWidthSecondary={2}
                background='transparent'
            />
        </div>
    );
};

export default Loader;
