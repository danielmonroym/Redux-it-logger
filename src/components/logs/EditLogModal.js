import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateLog } from "../../actions/logActions";



class EditLogModal extends Component {
  state = {
    id: null,
    message: "",
    attention: false,
    tech: "",
  };

   componentDidMount() {
    console.log("SIUUUUUUU");
    if (this.props.current) {
      console.log('xd')
    }
  } 

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);
    console.log(this.props.current);
    if (this.props.current.id !== prevState.id) {
      console.log("object");
      
        this.setState({
          id: this.props.current.id,
          message: this.props.current.message,
          tech: this.props.current.tech,
          attention: this.props.current.attention,
        });

        
      
    }
  }

  onSubmit = () => {
    if (this.state.message === "" || this.state.tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const updLog = {
        id: this.state. id,
        message: this.state.    message,
        attention: this.state.  attention,
        tech: this.state.   tech,
        date: new Date(),
      };
    
      this.props.updateLog(updLog);

      M.toast({ html: `Log updated by ${this.state.tech}` });

      
    }
  };
  render() {
    return (
      <div id="edit-log-modal" className="modal" style={modalStyle}>
        <div className="modal-content">
          <h4>Enter system log</h4>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="message"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-filed">
              <select
                name="tech"
                value={this.state.tech}
                className="browser-default"
                onChange={(e) => this.setState({ tech: e.target.value })}
              >
                <option value="" disabled>
                  Select Technician
                </option>
                <option value="John Doe">John Doe</option>
                <option value="Sam Smith">Sam Smith</option>
                <option value="Sara Wilson">Sara Wilson</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <p>
                <label>
                  <input
                    type="checkbox"
                    className="filled-in"
                    checked={this.state.attention}
                    value={this.state.attention}
                    onChange={(e) =>
                      this.setState({ attention: !this.state.attention })
                    }
                  />
                  <span>Needs attention</span>
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={this.onSubmit}
            className="modal-close waves-effect blue  btn"
          >
            Enter
          </a>
        </div>
      </div>
    );
  }
}

const modalStyle = {
  width: "75%",
  height: "75%",
};
const mapStateToProps = (state) => ({
  current: state.log.current,
});
export default connect(mapStateToProps, { updateLog })(EditLogModal);
