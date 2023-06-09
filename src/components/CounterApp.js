import React from 'react';

function CounterDisplay({count}){
    if(count === 0){
        return <p>{count}</p>;
    }

    if(count % 5 === 0 && count % 7 === 0){
        return <p>FizzBuzz</p>
    }

    if(count % 5 === 0){
        return <p>Fizz</p>
    }

    if(count % 7 === 0){
        return <p>Buzz</p>
    }

    return <p>{count}</p>
}

function IncreaseButton({increase}){
    return(
        <>
            <button onClick={increase}>+ increase</button>
        </>
    )
}

function ResetButton({reset}){
    return (
        <>
            <button onClick={reset}>- reset</button>
        </>
    )
}

class CounterApp extends React.Component {
    constructor(props){
        super(props);

        // inisialisasi nilai count di dalam stste
        this.state = {
            count: 0
        };
        // binding event handler
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }


    onIncreaseEventHandler(){
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
    }

    onResetEventHandler() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render(){
        return(
            <>
                <IncreaseButton increase={this.onIncreaseEventHandler} />
                <CounterDisplay count={this.state.count} />
                <ResetButton reset={this.onResetEventHandler} />
            </>
        )
    }
}

export default CounterApp;