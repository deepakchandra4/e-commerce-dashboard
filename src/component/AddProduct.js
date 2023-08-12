import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error , setError] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleProduct = async () => {

    if(!name || !price || !category || !company ){
        setError(true);
        return false
    }


    console.warn(name, price, category , company);
    //to get user unique ID
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    // console.warn(userId._id)

    let result = await fetch("http://localhost:4000/add-product" , {
        method: "POST",
        body : JSON.stringify({name, price, category, company , userId  }),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    result = await result.json();
    console.warn(result);
  }
  


  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter product name "
        className="inputBox"
        value={name}
        onChange={handleChangeName}
      />
      {error && !name && <span className="invalid-input">Enter valid name</span>}
      <input
        type="text"
        placeholder="Enter product price "
        className="inputBox"
        value={price}
        onChange={handleChangePrice}
      />
            {error && !price && <span className="invalid-input">Enter valid price</span>}

      <input
        type="text"
        placeholder="Enter product category "
        className="inputBox"
        value={category}
        onChange={handleChangeCategory}
      />
            {error && !category && <span className="invalid-input">Enter valid category</span>}

      <input
        type="text"
        placeholder="Enter product company "
        className="inputBox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
            {error && !company && <span className="invalid-input">Enter valid company</span>}

      <button className="appButton" onClick={handleProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
