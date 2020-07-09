import React from "react";
import User from "./User";
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import './master.css'
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';





class UsersTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    async componentDidMount() {
        fetch('https://gopolitest.herokuapp.com/ranking')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoading: false,
                    data: json,
                }, function () {
                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }


    render() {

        console.log(this.state.data)

        return (
            <div className="flex-container">
                <TableContainer component={Paper}>
                    <Table>
                <TableHead>
                <TableRow>
                    <TableCell align="center">Posición</TableCell>
                    <TableCell align="center">Nombre de Usuario</TableCell>
                    <TableCell align="center"># de Pasos</TableCell>
                </TableRow>
                </TableHead>
                <TableBody> {
                this.state.data.map((user,index) => {
                        return <User key={index} steps={user.usernameUser}
                                     usernameUser={user.steps} position={index + 1}/> })}
                </TableBody>
                </Table>
            </TableContainer>
            </div>
        )
    }
}

export default UsersTable

