let token = window.localStorage.getItem('sassToken')
$.ajaxSettings.headers = { token: token }
