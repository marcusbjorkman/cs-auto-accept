const observer = new MutationObserver(async _ => {
    try {
        const accept = document
            .getElementsByClassName('.modal-dialog__header__title[translate-once="MATCH-READY"]')[0]
            .parentElement
            .parentElement
            .querySelector('button[translate-once="ACCEPT"]');
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