import React, { lazy, Suspense, useState, useEffect } from "react";
// import logo from './logo.svg';
import './App.css';
import Dialog from "./components/Dialog";
import { FormUser } from "./components/Form";
import { Router } from "./routes";
const LazyList = lazy(() => import("./components/List"));

function App({ routingType, initialPathname }) {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [editForm, setEditForm] = useState({
  //   open: false, info: {}
  // })

  // useEffect(() => {
  //   (async () => {
  //     setLoading(true);
  //     try {
  //       const apiData = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const responseData = await apiData.json();
  //       setData(responseData);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, [])

  // const actions = async (type, item) => {
  //   if (type === "edit") {
  //     setEditForm({ open: true, info: item });
  //   }
  //   else if (type === "delete") {
  //     try {
  //       const apiData = await fetch(`https://jsonplaceholder.typicode.com/users/${item.id}`, { method: "DELETE" })
  //       const response = await apiData;
  //       if (response.status === 200) {
  //         const filterItem = data.filter(user => user.id !== item.id);
  //         setData(filterItem);
  //       } else {
  //         throw new Error("Error while deleting user");
  //       }
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   }
  // }

  // const table = {
  //   headers: [
  //     { key: "Name", value: "username" },
  //     { key: "Email", value: "email" },
  //     { key: "Phone", value: "phone" },
  //     { key: "Website", value: "website" },
  //     // { key: "Company", value: "" },
  //     // { key: "City", value: "City" },
  //   ],
  //   actions,
  //   data,
  //   error,
  //   loading,
  //   editForm,
  //   setEditForm
  // }

  return (
    <>
      {/* {editForm.open && (
        <Dialog close={() => setEditForm({ open: false })} data={editForm.info}>
          <FormUser data={editForm.info} />
        </Dialog>
      )}
      <div className="App">
        <header className="App-header">
          <h1>USERS</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyList {...table} />
          </Suspense>
        </header>
      </div> */}
      <Router routingType={routingType} initialPathname={initialPathname} />
    </>
  );
}

export default App;
