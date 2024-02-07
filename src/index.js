function getInformation() {
    return fetch('https://api.demo.edenlab.com.ua')
    .then((resp) => {
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }

        return resp.json();
    })
}

getInformation().then(data => console.log(data)).catch(err => console.log(err))