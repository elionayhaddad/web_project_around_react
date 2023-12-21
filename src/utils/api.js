class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  get(path) {
    return fetch(`${this.baseUrl}/${path}`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject();
    });
  }

  updateImageUser(url) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      body: JSON.stringify({ avatar: url }),
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject();
    });
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_04",
  headers: {
    authorization: "1c439799-4201-41a1-bc23-3ac75b525bca",
    "Content-type": "application/json",
  },
});

export default api;
