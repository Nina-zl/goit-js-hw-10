
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    if (!delay || !state) {
        iziToast.warning({
            title: "⚠️ Warning",
            message: "Please fill in all fields!",
            position: "topRight",
        });
        return;
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            state === "fulfilled" ? resolve(delay) : reject(delay);
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.success({
                title: "✅ Success",
                message: `Fulfilled promise in ${delay}ms`,
                position: "topRight",
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: "❌ Error",
                message: `Rejected promise in ${delay}ms`,
                position: "topRight",
            });
        });
});