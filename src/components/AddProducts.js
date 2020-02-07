import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions/products";
const AddProduct = () => {
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const alert = (
    <div class="alert alert-success">
      <strong>Success!</strong>Product successfully inserted
    </div>
  );
  let success = false;
  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(addProduct(data));
    success = true;
  };
  return (
    <div className="col-md-9 col-sm-6 mt-5">
      {success && alert}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            ref={register({ required: true })}
          />
          {errors.name && "please enter name of product"}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputDescription">Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="exampleInputDescription"
            placeholder="Description"
            ref={register({
              required: true,
              minLength: 10,
              maxLength: 50
            })}
          />
          {errors.description && "please enter description"}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPrice">Price</label>
          <input
            name="price"
            type="number"
            className="form-control"
            id="exampleInputPrice"
            placeholder="Price"
            ref={register({
              required: true
            })}
          />
          {errors.price && "please enter price"}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputQuantity">Quantity</label>
          <input
            name="quantity"
            type="number"
            className="form-control"
            id="exampleInputQuantity"
            placeholder="Quantity"
            ref={register({
              required: true
            })}
          />
          {errors.quantity && "please enter Quantity"}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputImage">Image</label>
          <input
            name="image"
            type="file"
            className="form-control"
            id="exampleInputImage"
            placeholder="Image"
            ref={register({
              required: true
            })}
          />
          {errors.image && "please enter Image"}
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
