export const login = data => {
  return (dispatch, getState) => {
    let headers = {
      "Content-Type": "application/json"
    };

    let body = JSON.stringify(data);
    console.log(body);

    return fetch("http://localhost:8000/login", {
      headers,
      body,
      method: "POST",
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
          dispatch({ type: "LOGIN_SUCCESSFUL", data: res.data });

          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
          throw res.data;
        } else {
          dispatch({ type: "LOGIN_FAILED", data: res.data });
          throw res.data;
        }
      });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem("token");

    let headers = {
      "Content-Type": "application/json"
    };
    console.log("from logout");

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    return fetch("http://localhost:8000/logout", {
      headers,
      body: "",
      method: "POST",
      mode: "cors"
    })
      .then(res => {
        if (res.status === 204) {
          return { status: res.status, data: {} };
        } else if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 204) {
          dispatch({ type: "LOGOUT_SUCCESSFUL" });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
          throw res.data;
        }
      });
  };
};

export const registration = data => {
  return dispatch => {
    let headers = {
      "Content-Type": "application/json"
    };

    let body = JSON.stringify(data);
    console.log(body);

    return fetch("http://localhost:8000/registration", {
      headers,
      body,
      method: "POST",
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
          dispatch({ type: "REGISTRATION_SUCCESSFUL", data: res.data });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
          throw res.data;
        } else {
          dispatch({ type: "REGISTRATION_FAILED", data: res.data });
          throw res.data;
        }
      });
  };
};
