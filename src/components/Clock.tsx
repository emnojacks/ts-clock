import React from 'react';

type ClockState = {
    time: Date
};

type AcceptedProps = {
    testProp: string,
    optionalProp?: string
};

// If you include this.state = { time: Date } in your constructor method(so your component will be initialized with a state), you can comment out the componentWillMount() lifecycle method since we no longer need to set the state of our component during the mounting phases - and everything should work the same!

//to pass our clockstate type alias into our clock component we need to pass props 
class Clock extends React.Component<AcceptedProps, ClockState> {
    //this enforces typechecking on the props that are passed into the component and reduces errors
    constructor(props: AcceptedProps) {
        super(props)
              //Initializing your state in the constructor method will prevent you from having to initialize it in a lifecycle method as we did above
        this.state = {
            time: new Date()
        }
        
    }
    //update the time to hold the value of the current date
    tick(){
        this.setState({
        time: new Date()
        })
    };
        
    //add lifecycle method that calls the new date (tick) method if the component mounts 
        
    
    //initializing our state BEFORE the component mounts
    // componentWillMount() {
    //     this.tick();
    // };

    //calling a setInterval moethod that updates the time every second (1000 ms = 1 second)
    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    };
    
    render() { 
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                 <br></br>
                <h1>
                    {/* grabbing state prop "time" and calling the local string method on it  */}
                    {this.state.time.toLocaleTimeString()}
                </h1>
                
                <p>{this.props.testProp}
                </p>
                <p> {this.props.optionalProp}
                </p>

        </div>
 )
    }
}
 
export default Clock;
