let redirect = false;

export function gotoLogin(loginPath: string, msg?: string) {
  if (!redirect) {
    redirect = true;
    if (msg) {
      window.alert(msg);
    }

    window.location.href = `${loginPath}${encodeURIComponent(window.location.href)}`;
  }
}
