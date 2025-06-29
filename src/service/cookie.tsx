// cookieService.ts

interface CookieService {
  getCookie(name: string): string | null;
  deleteCookie(name: string): void;
  decodeJWT(token: string): any;  // Tambahkan metode decodeJWT
}

const cookieService: CookieService = (function () {
  
  function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }

    return null;
  }

  function deleteCookie(name: string): void {
    document.cookie = `${name}=; Max-Age=-99999999;`;  // Menghapus cookie
  }

  // Fungsi untuk mendecode JWT (Header dan Payload saja)
  function decodeJWT(token: string): any {
    const parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error('Invalid JWT Token');
    }

    // Decode Base64URL Header dan Payload
    const header = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
    const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));

    return { header, payload };
  }

  return {
    getCookie,
    deleteCookie,
    decodeJWT
  };
})();

export default cookieService;
