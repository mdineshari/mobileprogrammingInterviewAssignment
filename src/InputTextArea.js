import React, {Component} from 'react';
import './InputTextArea.css';

class InputTextArea extends Component {
    render() {
        return (
            <div className="reactAssignment">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input 
                            placeholder="Text"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit">Add Text</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default InputTextArea;