import React, { Component } from 'react';
import { string, number } from 'prop-types';

class ChecklistRow extends Component {
    state = {
        checked: false
    }
    onCheckBoxClicked = () => {
        let { checked } = this.state;
        this.setState({
            checked: !checked
        })
    }

    render() {
        let { movie } = this.props;
        let { checked } = this.state;
        let { onCheckBoxClicked } = this;
        return (
            <tr>
                <td className="tr-center">
                    <input onChange={onCheckBoxClicked}
                        type="checkbox"
                        checked={checked} />
                </td>
                <td>
                    <div className={"gothic-font" + (checked ? " is-checked" : "")}>
                        {movie}
                    </div>
                </td>
            </tr>
        );
    }
}

ChecklistRow.propTypes = {
    index: number,
    movie: string
};

export default ChecklistRow;

