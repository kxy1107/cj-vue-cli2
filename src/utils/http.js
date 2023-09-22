function getMethod(getUrl, data = {}) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "get",
      params: data,
      url: getUrl.includes("http")
        ? getUrl
        : `${process.env.VUE_APP_BASEAPI}${getUrl}`,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.data.statusCode == 200) {
          resolve(response.data.data);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
function postMethod(postUrl, data = {}) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "post",
      url: postUrl.includes("http")
        ? postUrl
        : `${process.env.VUE_APP_BASEAPI}${postUrl}`,
      data: data,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.data.statusCode == 200) {
          resolve(response.data.data);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
function postFormMethod(postUrl, data = {}) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "post",
      url: postUrl.includes("http")
        ? postUrl
        : `${process.env.VUE_APP_BASEAPI}${postUrl}`,
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.status == 200) {
          resolve(response.data);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { getMethod, postMethod, postFormMethod };
