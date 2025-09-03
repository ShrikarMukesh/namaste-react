import React from "react";
class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count:10,
            count2:20
        };
        console.log(this.props.name + 'Child constructor called');
    }
    componentDidMount() {
        //API CALLS
        console.log(this.props.name + 'child componentDidMount called')
    }

    render (){
        console.log(this.props.name + 'Child render called');
        //This is called destructing
        const{count} = this.state;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={()=>{
                    //NEVER UPDATE STATE VARIABLE DIRECTLY IN REACT
                    this.setState({
                        count: count + 1,
                        count2: this.state.count2 + 1,
                    })
                }}>Increase the count</button>
                <h1>Count2: {this.state.count2}</h1>
                <h1>Name: {this.props.name}</h1>
                <h2>Location:{this.props.location}</h2>
                <h3>Contact:@Shrikarmukesh</h3>
            </div>
        );
    }
}

export default UserClass;