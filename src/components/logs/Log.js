import React, { Component } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';
class Log extends Component {
/*   state = {
    logs: [],
    loading: false,
  }; */

  componentDidMount() {
    this.props.getLogs();
  }

 /*  getLogs = async () => {
    this.setState({
      loading: true,
    });
    const res = await fetch("/logs");
    const data = await res.json();

    this.setState({
      logs: data,
      loading: false,
    });
    console.log(this.state.logs, this.state.loading);
  }; */

  render() {
    let log = null;
    if (this.props.loading || this.props.logs === null) {
      return <Preloader />;
    }

    if (!this.props.loading && this.props.logs.length === 0) {
      log = (
        <div>
          {" "}
          <p className="center">No logs to show...</p>
        </div>
      );
    } else {
      log = this.props.logs.map((log) => <LogItem log={log} key={log.id} />);
    }
    return (
      <div className="container">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">System logs</h4>
          </li>
          {log}
        </ul>
      </div>
    );
  }
}

/* Log.propTypes = {
    logs: PropTypes.array.isRequired,
    
  }; */
const mapStateToProps = state => ({
    logs: state.log.logs, 
    loading: state.log.loading
  });
  

export default connect(mapStateToProps, {getLogs})(Log);
