export const checkUrl = () => {
    let localUrl = "";
    let baseURL = "";
    let isMock =
        location.host.includes("localhost") ||
        location.host.includes("127.0.0.1");
    if (isMock) {
        baseURL = "";
    }
    return baseURL;
};

/**
 * format date
 * @param {Date} date
 */
 export const formatDate = (date: Date) => {
    let y = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? Number("0" + MM) : MM;
    let d = date.getDate();
    d = d < 10 ? Number("0" + d) : d;
    let h = date.getHours();
    h = h < 10 ? Number("0" + h) : h;
    let m = date.getMinutes();
    m = m < 10 ? Number("0" + m) : m;
    let s = date.getSeconds();
    s = s < 10 ? Number("0" + s) : s;
    return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
};