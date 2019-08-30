import React, { useContext } from 'react'

import ContactsContext from "../context/ContactsContext"
import { actionSearch } from '../context/actionsCreators';

const Searcher = () => {
    const [state, dispatch] = useContext(ContactsContext)
    console.log(state)
    return (
        // <div className="col-10 mb-1">
        <div className="col-10 col-md-11 d-flex bg-secondary searcher">
            <input onKeyUp={e => dispatch(actionSearch(e.target.value))} className="searcher__input text-white" type="text" placeholder={`${state.isSearcherDisabled ? "No puedes buscar mientras editas" : "Buscar contacto"}`} disabled={state.isSearcherDisabled ? true : false} />
        </div>
        // </div>
    )
}

export default Searcher
