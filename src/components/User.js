import React from "react";
import './master.css'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class User extends React.Component {

    render() {

        console.log("this.props.caption = " + this.props.caption);
        console.log("this.props.location = " + this.props.location);
        console.log("this.props.src = " + this.props.src)

        return  <TableRow>
            <TableCell align="center">{this.props.position}</TableCell>
            <TableCell align="center">{this.props.steps}</TableCell>
            <TableCell align="center">{this.props.usernameUser}</TableCell>
        </TableRow >

    }
}

export default User
