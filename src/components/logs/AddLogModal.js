import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

class AddLogModal extends Component {

    state = {
        message: '',
        attention: false,
        tech: ''
    }

    onSubmit = () => {
        if (this.state.message=== '' || this.state.tech === '') {
            M.toast({ html: 'Please enter a message and tech'});
        }else{
            const newLog = {
                message: this.state.message,
                attention: this.state.attention,
                tech: this.state.tech,
                date: new Date()
              };
        
            this.props.addLog(newLog);
            console.log(addLog(newLog));
        
              M.toast({ html: `Log added by ${this.state.tech}` });
            this.setState({ message: '', tech: '', attention: false });
        }
       
    }
    render() {
        return (
            <div id="add-log-modal" className="modal" style={modalStyle}>
                <div className="modal-content">
                    <h4>Enter system log</h4>
                    <div className="row">
                        <div className="input-field">
                            <input type="text" name="message" value={this.state.message} onChange={e => this.setState({ message: e.target.value})}/>
                            <label htmlFor="message" className="active">
                                Log Message
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-filed">
                            <select name="tech" value={this.state.tech} className="browser-default" onChange={e => this.setState({tech: e.target.value})}
                            >
                                <option value="" disabled>
                                    Select Technician
                                </option>
                                <option value="John Doe" >
                                   John Doe
                                </option>
                                <option value="Sam Smith" >
                                   Sam Smith
                                </option>
                                <option value="Sara Wilson" >
                                   Sara Wilson
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <p>
                                <label >
                                    <input type="checkbox"  className="filled-in" checked={this.state.attention} value={this.state.attention} onChange={e => this.setState({attention: !this.state.attention})}/>
                                <span>Needs attention</span>
                                </label>
                            </p>
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


 AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired
  }; 
  
  const modalStyle = {
    width: '75%',
    height: '75%'
  };
  
  export default connect(
    null,
    { addLog }
  )(AddLogModal);