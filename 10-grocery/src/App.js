import React, { useEffect, useState, useRef } from "react";
import Alert from "./Alert";
import List from "./List";

import "./styles/styles.css";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    message: "",
    type: ""
  });
  const textInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please enter value.");
    } else if (name && isEdit) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEdit(false);
      showAlert(true, "success", "Item changed.");
    } else {
      showAlert(true, "success", "Item added.");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "All clear!");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item Removed.");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEdit(true);
    textInput.current.focus();
    setEditId(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <main className="max-w-sm mx-auto my-10">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-telcoight">
        Grocery List
      </h2>
      <form
        className="mt-5 relative pt-7 pb-5 border-b"
        onSubmit={handleSubmit}
      >
        <div className="flex">
          <input
            ref={textInput}
            type="text"
            id="item"
            name="item"
            placeholder="insert item"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-l-md px-4 w-full"
          />
          <button type="submit" className="py-2 px-5 rounded-r-md bg-gray-300">
            {isEdit ? "Edit" : "Add"}
          </button>
        </div>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      </form>
      {list.length > 0 && (
        <List
          items={list}
          clearList={clearList}
          removeItem={removeItem}
          editItem={editItem}
        />
      )}
    </main>
  );
}
