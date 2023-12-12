import React, { useState } from 'react'
const Header = ({ setSearch, wishlist }) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(value)
        setValue("")
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <form className="d-flex form" role="search" onSubmit={(e) => handleSubmit(e)}>
                        <input className="form-control me-2" value={value} type="search" placeholder="Search" aria-label="Search" onChange={(e) => {
                            setValue(e.target.value)
                        }} />
                        <button className="btn btn-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
            
        </nav>
    )
}

export default Header