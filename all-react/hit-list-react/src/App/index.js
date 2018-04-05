import React from "react";
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: true,
            errMsg: ''
        }
        this.trigger = this.trigger.bind(this)
    }
    componentDidMount() {
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
            // console.log(response.data);
            this.setState({
                list: response.data,
                loading: false
            })
        })
            .catch(err => {
                this.setState({
                    loading: false,
                    errMsg: err.message
                })
            })
    }

    trigger(index){
        this.setState(prevState =>{
            let newList = prevState.list;
            newList[index].className='triggerImg';
            return newList
        })
    }
    
    render() {
        console.log(this.state);
        const { list, loading, errMsg } = this.state;
        let data ='';
        if (loading) {
                data ='still loading..'
        }else if(errMsg !== ""){
                 data = errMsg
            }else{
                data =list.map((personObj, index)=><div className={personObj.className} key={index}>
                <img src={personObj.image} alt=""/>
                <button onClick={()=>this.trigger(index)}>click</button>
                <figcaption>{personObj.name}</figcaption></div>)
            }
            return(
                <div className='list'>{data}</div>
            )
        }

    }


export default App;