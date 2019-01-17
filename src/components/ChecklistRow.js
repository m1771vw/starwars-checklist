import React, { Component } from 'react';
import { string, bool } from 'prop-types';

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
        let { movie, disabled } = this.props;
        let { checked } = this.state;
        let { onCheckBoxClicked } = this;
        return (
            <tr>
                <td className="tr-center">
                    <input type="checkbox"
                        onChange={onCheckBoxClicked}
                        checked={checked}
                        disabled={disabled} />
                </td>
                <td>
                    <div className={"gothic-font" + (checked ? " is-checked" : "") + (disabled ? " disabled" : "")}>
                        {movie}
                    </div>
                </td>
            </tr>
        );
    }
}

ChecklistRow.propTypes = {
    disabled: bool,
    movie: string
};

export default ChecklistRow;

