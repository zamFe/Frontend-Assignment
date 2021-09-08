import React, { Component } from 'react';

class ApiResult extends Component {
    state = {
        ships: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/ships/')
        .then(res => res.json())
        .then((data) => {
            this.setState({ ships: data })
        })
        .catch(console.log)
    }
    render() {   
        return(
            <div>test</div>
        )
    }
}

export default ApiResult;