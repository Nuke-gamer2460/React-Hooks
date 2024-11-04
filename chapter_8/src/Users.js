import React from 'react';
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
function App() {
    const user = {
        firstName: 'Greg',
        lastName: 'Lim',
        imageUrl:'https://picsum.photos/200/300',
    };
    return (
        <div>
            <h1>
                Hello, {formatName(user)}
                <br />
                <img src={user.imageUrl} alt="user image"/>
            </h1>
        </div>
    );
}

export default App;