import React from 'react';

function User(props) {
    const handleUser = (e) => {
        e.preventDefault();
        props.newUser(e);
    };

    return (
        <div>
            <form onSubmit={handleUser}>
                <label htmlFor="user">enter your name</label>
                <input id='user' type="text" />
                <button type="submit">enter</button>
            </form>
        </div>
    );
}

export default User;