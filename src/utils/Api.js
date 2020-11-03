const baseUrl = 'http://localhost:8080/v1/';

export function getMonitorering(systemId) {
    return fetch(`${baseUrl}monitorering/${systemId}`)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
            throw new Error(res.statusText);
        });
}

export function getMonitoreringtillfallen(monitoreringId) {
    return fetch(`${baseUrl}monitoreringtillfallen/${monitoreringId}`)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
            throw new Error(res.statusText);
        });
}

export function getMonitoreringtillfalle(id) {
    return fetch(`${baseUrl}monitoreringtillfalle/${id}`)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
            throw new Error(res.statusText);
        });
}

export function postMonitoreringtillfalle(monitoreringtillfalle) {
    return fetch(`${baseUrl}monitoreringtillfalle`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
          }),
        body: JSON.stringify(monitoreringtillfalle),
        mode: 'cors'
    })
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
            throw new Error(res.statusText);
        });
}