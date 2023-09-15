 Object.defineProperty(document, 'visibilityState', {
    get() {
        return 'visible';
    }
});
document.addEventListener('visibilitychange', () => {}, false);
Object.defineProperty(document, 'hasFocus', {
    get() {
        return () => true;
    }
});
