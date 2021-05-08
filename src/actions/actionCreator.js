export function fetchEmpLists() {
    return function (dispatch) {
        const apiUrl = " http://127.0.0.1:5000/lms/employeeDetails";
        //fetch(" http://127.0.0.1:5000/lms/employeeDetails")
        fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization:
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);

                dispatch({ type: 'GET_LIST', payload: result })
                // const items = result.data;
                // setItems(items);
                // setIsLoaded(true);
            })
            .catch((error) => console.log(error));
    }
}

export function addEmp(details) {
    console.log(details)
    return function (dispatch) {
        const apiUrl = " http://127.0.0.1:5000/lms/addEmployee"
        fetch(apiUrl, {
            method: "POST",
            headers: {
                Authorization:
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
            },
            body: JSON.stringify(details),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.success) {
                    dispatch({ type: 'ADD_EMP', payload: details })
                    //localStorage.setItem("token", data.token);
                    // this.props.history.push("/homepage");
                    // this.setState({
                    //     response: data.response,
                    //     message: data.message,
                    //     token: data.token,
                    // });
                    // this.props.history.push("/homepage");
                }
                console.log("This is your data", data)
            })
            .catch((err) => console.log("something went wrong", err));
    }
}
export function delEmp(id) {
    console.log(id)
    return function (dispatch) {
        const apiUrl = "http://127.0.0.1:5000/lms/deleteEmployee";
        // const payload = new FormData();
        // payload.append("itemId", itemId);
        const payload = { qci_id: id };

        const options = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                Authorization:
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
            },
        };

        fetch(apiUrl, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    console.log(data);

                    if (data.success) {
                        dispatch({ type: 'DEL_EMP', payload: id })

                    }
                },
                (error) => {
                    //   this.setState({ error });
                }
            );
    }
}
export function updateEmp(data) {
    console.log(data)
    return function (dispatch) {
        const apiUrl = "http://127.0.0.1:5000/lms/editEmployeeDetails";

        const payload = data;

        console.log(payload);

        const options = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                Authorization:
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
            },
        };

        fetch(apiUrl, options)
            .then((res) => res.json())
            .then(
                (result) => {
                    //   this.setState({
                    //     response: result,
                    //     items: items.filter((row) => row.qci_id !== itemId),
                    //   });

                    dispatch({ type: 'UPDATE_EMP', payload: data })


                    console.log(result);
                },
                (error) => {
                    //   this.setState({ error });
                }
            );
    }
}