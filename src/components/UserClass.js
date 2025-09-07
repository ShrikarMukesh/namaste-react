import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Shrikar",
                location: "Default Bangalore",
                company: "Infometry Default",
                avatar_url: "http://dummy.photo"
            }
            //count:10,
            //count2:20
        };
        //console.log(this.props.name + 'Child constructor called');
    }

    async componentDidMount() {
        //API CALLS
        //console.log(this.props.name + 'child componentDidMount called')
        const data = await fetch("https://api.github.com/users/shrikarmukesh");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log(json);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount called')
    }

    render() {
        //console.log(this.props.name + 'Child render called');
        //This is called destructing
        //const{count} = this.state;
        const {name, company, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h2>Location:{location}</h2>
                <h3>company:{company}</h3>
                <img src={avatar_url}></img>
                {/*<h1>Count: {count}</h1>*/}
                {/*<button onClick={()=>{*/}
                {/*    //NEVER UPDATE STATE VARIABLE DIRECTLY IN REACT*/}
                {/*    this.setState({*/}
                {/*        count: count + 1,*/}
                {/*        count2: this.state.count2 + 1,*/}
                {/*    })*/}
                {/*}}>Increase the count</button>*/}
                {/*<h1>Count2: {this.state.count2}</h1>*/}

            </div>
        );
    }
}

export default UserClass;

/*****
 * ---- MOUNTING ----
 *
 *     Constructor(dummy)
 *     Render(dummy)
 *        <HTML Dummy>
 *     Component did mount
 *        <API CALL>
 *        <this.setState> --> state variable is update
 * ---- UPDATE --------
 *      Render (API Data)
 *      <HTML (new api data
 * --- Unmounting -----
 */
