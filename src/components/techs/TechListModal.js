import React, { Component } from 'react'
import TechItem from './TechItem'

 class TechListModal extends Component {

    state ={
        techs: [],
        loading:false
    }

    componentDidMount(){
        this.getTechs();
      
    }

    getTechs = async () => {
        this.setState({
            loading: true
        })
        const res = await fetch('/techs');
        const data = await res.json();

        this.setState({
            techs: data,
             loading: false
        })
       console.log(this.state.techs,this.state.loading);
    }

    
    render() {
    
        return (
            <div id="tech-list-modal" className="modal">

                <div className="modal-content">
                    <h4>Technician List</h4>
                    <ul className="collection">
                        {!this.state.loading && this.state.techs.map(tech => (
                            <TechItem tech={tech} key={tech.id}/>
                        ))}
                    </ul>
                </div>
            </div>
            
            
        )
    }
}

export default TechListModal;