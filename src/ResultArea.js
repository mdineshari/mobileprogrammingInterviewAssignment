import React, {Component} from 'react';
import './ResultArea.css';

class ResultArea extends Component {
    constructor(props) {
        super();
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(item) {
        return (
            <tr key={item.key}>
                <td>{item.key}</td>
                <td>{item.text}</td>
                <td>{item.date}</td>
                <td><input type="button" onClick={() => {this.props.removeItem(item)}} value="Remove" /></td>
            </tr>
        )
    }
    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);
        return (
            <table className="table-container">
                <thead>
                    <tr>
                        <th>Serial No.</th>
                        <th>Name</th>
                        <th>Created on</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        )
    }
}

export default ResultArea;