import React from "react";
import PropTypes from "prop-types";
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onRemoveContact }) => {
    return(
    <ul>
        {contacts.map((contact) => {
            return (
              
                <li className={css.contact_item} key={contact.id}>{contact.name}: {contact.number} 
                    {<button className={css.btn_delete} type="button" name="delete" onClick={() => onRemoveContact(contact.id)}>Delete</button>}</li>
                   
           )
       })}
   </ul>)
        
    
}
ContactList.propTypes = {
    onRemoveContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}