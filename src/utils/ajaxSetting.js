const token = CB.TOKEN;

if (token) {
  $.ajaxSettings.headers = { token: token }
}