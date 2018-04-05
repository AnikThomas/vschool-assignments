import React from "react";
import DataList from './DataContainer/DataList';
import axios from 'axios';

const swApiURL ='https://swapi.co/api/people/';

class DataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            eerMsg: '',
            loading: true

        }
    }
    componentDidMount() {
        axios.get(swApiURL).then(response => {
            const { results } = response.data;
            console.log(response.data);
            this.setState({
                people: results,
                loading: false
            })
        })
            .catch(err => {
                this.setState({
                    errMsg: err.message,
                    loading: false
                })
            })
    }
    render() {
        const { people, errMsg, loading } = this.state;
        console.log(this.state);
        if (loading) {
            return <div>...loading</div>
        } else {
            if (errMsg) {
                return <p>Sorry, your data is not available</p>
            } else {
                return (
                    <DataList people={people}></DataList>
                )

            }
        }

    }
}
    export default DataContainer;