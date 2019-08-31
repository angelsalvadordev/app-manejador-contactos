import React, { useState, useContext } from 'react'
import EditorContact from './EditorContact';

import ContactsContext from "../context/ContactsContext"
import { actionRemoveContact, actionDisabledSearcher } from '../context/actionsCreators';


const ContactOptions = ({ contact, setShowOptions }) => {


  const [showEdit, setShowEditor] = useState(false) // Estado local


  const [state, dispatch] = useContext(ContactsContext) // Estado Global

  return (
    <>
      <div className="row no-gutters d-flex bg-light contact-options">
        <div className="col-6 d-flex justify-content-center align-items-center ">
          <span
            className="contact-options__edit d-flex align-items-center"
            onClick={
              e => {
                e.stopPropagation()
                setShowEditor(true)
                dispatch(actionDisabledSearcher(true))
              }
            }
          >Editar</span>
        </div>
        <div className={"col-6 d-flex justify-content-center align-items-center"}>
          <span className="contact-options__delete d-flex align-items-center"
            onClick={
              (e) => {
                e.stopPropagation()
                if (window.confirm('Seguro que deseas eliminar este contacto?')) {
                  dispatch(actionRemoveContact(contact.id))
                  setShowOptions(false) // evita que el siguiente elemento muestre las opciones
                }
              }
            }
          >Eliminar</span>
        </div>
        <div className="contact-options__back f-icon"
          onClick={
            e => {
              e.stopPropagation()
              setShowOptions(false)
            }
          }
        >settings_backup_restore</div>
      </div>
      {
        showEdit
          ? <EditorContact
            contact={contact}
            setShowEditor={setShowEditor}
            setShowOptions={setShowOptions} />
          : null
      }
    </>
  )
}

export default ContactOptions
