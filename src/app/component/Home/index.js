import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                Home
                <button onClick={ ()=>{ this.props.onChangeSharedBool() } }>Click to toggle</button>
            </div>
        );
    }
}
export default Home;
