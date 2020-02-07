import React from "react";

const ProductCard = props => {
  return (
    <div className="col-md-4 ">
      <div className="card mb-4 shadow-sm">
        <img
          className="card-img-top"
          src={props.product.image}
          alt="Bologna"
          width="100%"
          height="225"
        />
        <div className="card-body">
          <p className="card-title mb-3">{props.product.name}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <p className="font-weight-bold">
                {props.product.price}{" "}
                <i
                  class="fa fa-inr"
                  style={{ fontSize: "16px", color: "red" }}
                ></i>
              </p>
            </div>
            <button
              type="button"
              className="btn btn-outline-success my-2 my-sm-0 float-right"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
