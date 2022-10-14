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