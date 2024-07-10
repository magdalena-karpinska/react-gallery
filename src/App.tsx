import "./App.scss";
import { FormEvent, useState } from "react";
import { Form } from "./components/form/Form";
import { Navbar } from "./components/navbar/Navbar";

//const apiKey = "qRrrr0-zbjloU_Vk_hfaXzP-xS2FwQ8q9qeJBZtBdVY"

function App() {
  const [searchWord, setSearchWord] = useState("");

  const getData = async (searchWord: string) => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchWord}&client_id=qRrrr0-zbjloU_Vk_hfaXzP-xS2FwQ8q9qeJBZtBdVY`
    );
    const data = await res.json();
    console.log(data);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(searchWord);
    getData(searchWord);
  };

  return (
    <>
      <Navbar />
      <Form
        handleSubmit={(e) => handleSubmit(e)}
        setSearchWord={setSearchWord}
        searchWord={searchWord}
      />
    </>
  );
}

export default App;
