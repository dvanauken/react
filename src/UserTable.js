// UserTable.js
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import users from './users.json';

export default function UserTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell align="right">Given Name</TableCell>
                        <TableCell align="right">Middle Initial</TableCell>
                        <TableCell align="right">Surname</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell align="right">
                                <Link to={`/user/edit/${user.id}`}>{user.username}</Link>
                            </TableCell>
                            <TableCell align="right">{user.givenname}</TableCell>
                            <TableCell align="right">{user.middleinitial}</TableCell>
                            <TableCell align="right">{user.surname}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}