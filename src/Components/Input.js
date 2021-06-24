import React, { Fragment } from "react";

const Input = prop => {
  return (
    <Fragment>
      <input
        type="number"
        className={prop.className}
        name={prop.name}
        id={prop.id}
        value={prop.val}
        onChange={prop.handleChange}
        placeholder={prop.placeholder}
      />
    </Fragment>
  );
};

export default Input;
