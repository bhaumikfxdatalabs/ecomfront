export const addProduct = data => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    console.log(token);

    let headers = {
      "Content-Type": "application/json"
    };

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    let formData = new FormData();
    for (var key in data) {
      if (key === "image") {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    }
    for (var value of formData.values()) {
      console.log(value);
    }

    return fetch("http://localhost:8000/api/products", {
      header: headers,
      method: "POST",
      body: formData,
      mode: "cors"
    })
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 201) {
          dispatch({ type: "ADD_PRODUCT", product: res.data });
          return res.data;
        } else if (res.status === 401 || res.status === 403) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
          throw res.data;
        }
      });
  };
};

export const fetchProducts = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;

    let headers = {
      "Content-Type": "application/json"
    };

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    return fetch("http://localhost:8000/api/products", {
      headers,
      mode: "cors"
    })
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          return dispatch({ type: "FETCH_PRODUCTS", products: res.data });
        } else if (res.status === 401 || res.status === 403) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
          throw res.data;
        }
      });
  };
};
