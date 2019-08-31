import React, { useContext } from 'react'

import ContactsContext from "../context/ContactsContext"
import { actionSearch } from '../context/actionsCreators';

const Searcher = () => {
    const [state, dispatch] = useContext(ContactsContext)

    return (
        <div className="col-10 col-md-11 d-flex bg-secondary searcher">
            {
                state.isSearcherDisabled
                    ? <div className="text-white d-flex align-items-center pl-1">Buscador Deshabilitado</div>
                    : <input
                        onKeyUp={e => dispatch(actionSearch(e.target.value))}
                        className="searcher__input text-white"
                        type="text"
                        placeholder="Buscar contacto"
                    />
            }
        </div>
    )
}

export default Searcher
