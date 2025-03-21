export function useDebounce(cb, delay) {
    let timerID;

    return (...args) => {
        clearTimeout(timerID);
        timerID = setTimeout( () => {
            cb(...args);
        },delay);
    }
}