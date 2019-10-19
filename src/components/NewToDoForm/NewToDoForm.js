import React from 'react';

export const NewToDoForm = props => (
   <div className="form">
      <input className="form__input" type="text" onChange={props.onChange} value={props.draft} />
      <button className="form__button" onClick={props.onSubmit}>
         Add
      </button>
   </div>
);
