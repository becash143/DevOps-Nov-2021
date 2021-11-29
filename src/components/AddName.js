import React from 'react';
import TextField from '@mui/material/TextField';

class AddName extends React.Component {
    render (){
        return (
            <div className="ui main">
                <h3>Add Name</h3>
                <form className="ui form">
                <div className="field">
                        <label>Company Id</label>
                        <TextField id="filled-basic" label="S.Group" variant="filled" />
                    </div>
                    <div className="field">
                        <label>Name of Company</label>
                        <input type="text" name="name" placeholder="S.Goup" />
                    </div>
                    <button className="ui button purple">Update</button>
                </form>
            </div>
        )
    }

}

export default AddName;