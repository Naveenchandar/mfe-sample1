import("./bootstrap").then(
    ({ mount }) => {
        const element = document.getElementById('dev-users-root');
        mount(element, { routingType: 'browser' });
    }
);

export { };;