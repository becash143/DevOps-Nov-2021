import React from 'react';

class AddContact extends React.Component {
    render (){
        return (
            <div className="ui main">
                <form className="ui form">
                    <div className="field">
                        <label>Contact Number</label>
                        <input type="number" name="number" placeholder="9876482971" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="contact email" />
                    </div>
                </form>
            </div>
        )
    }

}

export default AddContact;