md5 = require("js-md5");

const login = require("./api/auth").login;
const pause = require("./api/auth").pause;

const Secrets = {
    username: process.env.LEISHEN_USERNAME ?? process.argv[2],
    password: md5(process.env.LEISHEN_PASSWORD ?? process.argv[3]),
};

async function start(username, password) {
    console.log("🌀雷神加速器暂停助手 开始运行-------");
    if (!username || !password) {
        console.log("Empty username or password");
        return;
    }
    const user = {
        account_token: null,
        country_code: 86,
        lang: "zh_CN",
        password: Secrets.password,
        region_code: 1,
        src_channel: "guanwang",
        user_type: "0",
        username: Secrets.username,
    };

    const res = await login(user);
    if (res.data.code == 0) {
        let account_token = res.data.data.login_info.account_token;
        const res2 = await pause({
            account_token: account_token,
            lang: "zh_CN",
        });
        console.log(res2.data);
        console.log("🌀雷神加速器暂停助手 成功");
    } else {
        console.log(res.data);
        console.log("🌀雷神加速器暂停助手 失败");
    }
    console.log("🌀雷神加速器暂停助手 结束运行");
}

start(Secrets.username, Secrets.password);
