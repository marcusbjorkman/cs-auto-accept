const observer = new MutationObserver(async _ => {
    try {
        const accept = document.getElementById('match-accept');
        if (accept) {
            await delay(5000);
            accept.click();
        }
    }
    catch (e) {
        console.log(e);
    }
});

const delay = async (msDelay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, msDelay);
    });
};

observer.observe(document, { childList: true, subtree: true });