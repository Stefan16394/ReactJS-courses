import $ from 'jquery'
const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_HkdbgJ-mQ";
const kinveyAppSecret = "05b1e0a22c9e495c88fa1495897c4e3c";

const masterSecret = "b8f0dba47e894264a4cb2e8db48c02b7"

// Creates the authentication header
function makeAuth(type) {
    switch (type) {
        case "basic":
            return 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret);
        case 'kinvey':
            return 'Kinvey ' + sessionStorage.getItem('authtoken');
        case "master":
            return 'Basic ' + btoa(kinveyAppKey + ':' + masterSecret)
            default:
            return null
    }

}

// Creates request object to kinvey
function makeRequest(method, module, endpoint, auth) {
    return {
        method,
        url: kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint,
        headers: {
            'Authorization': makeAuth(auth)
        }
    };
}

// Function to return GET promise
function get(module, endpoint, auth) {
    return $.ajax(makeRequest('GET', module, endpoint, auth));
}

// Function to return POST promise
function post(module, endpoint, auth, data) {
    let req = makeRequest('POST', module, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

// Function to return PUT promise
function update(module, endpoint, auth, data) {
    let req = makeRequest('PUT', module, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

// Function to return DELETE promise
function remove(module, endpoint, auth) {
    return $.ajax(makeRequest('DELETE', module, endpoint, auth));
}


export default {
    get,
    post,
    update,
    remove
}
