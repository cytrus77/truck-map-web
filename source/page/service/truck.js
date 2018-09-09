export async function truckCall(path, method = 'GET', query, body) {
    query = query ? new URLSearchParams(query) : '';

    const response = await fetch(`http://27.102.107.55:5000/${path}?${query}`, {
        method,
        body,
        mode: 'cors',
        credentials: 'include'
    });

    if (response.status > 299)
        throw Object.assign(new URIError(response.statusText), {
            code: response.status,
            response
        });

    return await response.json();
}

export function submit(form) {
    return truckCall(
        form.getAttribute('action'),
        form.getAttribute('method'),
        null,
        new FormData(form)
    );
}

var user;

export async function currentUser() {
    return user || (user = await truckCall('user'));
}

const router = document.querySelector('cell-router');

export function navTo(route) {
    return router.navTo(
        Object.assign(document.createElement('a'), { href: route })
    );
}

const userName = document.querySelector('cell-drawer > header span');

export function signIn(user) {
    userName.textContent = user.name;
}
