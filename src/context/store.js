import { GET_API, REMOVE_CONTACT, SEARCH_CONTACT, } from "./actions"

export const initialContacts = {
  contacts: [],
  search: ""
}

//Reducer
export const contactsReducer = (state, action) => {
  switch (action.type) {
    // Agregar datos de API al estado
    case GET_API:
      return {
        ...state,
        contacts: state.contacts.concat(action.data)
      }

    case REMOVE_CONTACT:
      const confirmation = window.confirm('Seguro que desea eliminar este contacto ?')
      if (confirmation) {
        return {
          ...state,
          contacts: state.contacts.filter(contact => {
            return contact.id !== action.id
          })
        }
      }
      return state

    case SEARCH_CONTACT:
      let word = action.data
      word = word.toLowerCase()
      return {
        ...state,
        search: word
      }

    default: console.log('error inesperado', action.type)
      break
  }
}