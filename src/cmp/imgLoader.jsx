import React, { useState } from 'react';
import Loading from './Loader';

function ImageLoader({ src }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setIsError(true);
    };

    return (
        <div className='img-loader-cmp'>
            {isError ? (
                <p>Error loading image</p>
            ) : (
                <>
                    {!isLoaded && <Loading />}

                    <img
                        src={src}
                        width="250" height="250"
                        alt="candidate img"
                        onLoad={handleLoad}
                        onError={handleError}
                        style={{ display: isLoaded ? 'block' : 'none' }}
                    />
                </>
            )}
        </div>
    );
}

export default ImageLoader;
