import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";

class AddTechModal extends Component {

    state = {
        firstName: '',
        lastName: '',
    }

    onSubmit = () => {
        if (this.state.firstName=== '' || this.state.lastName === '') {
            M.toast({ html: 'Please enter a name'});
        }else{
            console.log(this.state.firstName,this.state.lastName);
            this.setState({ firstName: '',lastName: '' });
        }
       
    }
    render() {
        return (
            <div id="tech-modal" className="modal" >
                <div className="modal-content">
                    <h4>New Technician</h4>
                    <div className="row">
                        <div className="input-field">
                            <input type="text" name="firstName" value={this.state.firstName} onChange={e => this.setState({ firstName: e.target.value})}/>
                            <label htmlFor="firstName" className="active">
                               First Name
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input type="text" name="lastName" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value})}/>
                            <label htmlFor="lastName" className="active">
                               Last Name
                            </label>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" onClick={this.onSubmit} className="modal-close waves-effect blue  btn">Enter</a>
                </div>
            </div>
        )
    }
}


export default AddTechModal
