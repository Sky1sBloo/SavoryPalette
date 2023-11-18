import { useState, useEffect, useRef } from 'react';

/**
 * Calls use effect every delay seconds
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * @param {*} callback Function to be called
 * @param {int} delay Time in milliseconds
 */
const useEffectDelay = (callback, delay) => {
    const savedCallback = useRef();

    // Set the latest callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Create the interval
    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default useEffectDelay;