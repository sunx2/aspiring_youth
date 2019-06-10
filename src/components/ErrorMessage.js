import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class ErrorMessage extends React.Component {

    render() {
        return this.props.msg==null||this.props.msg===''?null:(
            <div className="alert alert-danger">
                <strong>Error!</strong> {this.props.msg}
            </div>
        )
    }
}