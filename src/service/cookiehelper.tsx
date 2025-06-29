export function setCookie(name: String, value: String, days: number) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

export function getCookie(name: String) {
    const NameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(NameEQ) == 0) return c.substring(NameEQ.length, c.length);
    }   
    // return a;
}

export function eraseCookie(name: String) { document.cookie = name + "=; Max-Age=-99999999;"; }
