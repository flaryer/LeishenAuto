const request = require("../utils/request");

async function login(data) {
    return request({
        url: "/api/auth/login",
        method: "post",
        data,
    });
}

async function pause(data) {
    return request({
        url: "/api/user/pause",
        method: "post",
        data,
    });
}

module.exports = { login, pause };
