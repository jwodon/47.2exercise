import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({ dogs }) {
    return (
        <nav>
            {dogs.map((dog) => (
                <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
                    {dog.name}
                </NavLink>
            ))}
        </nav>
    );
}

export default Nav;
