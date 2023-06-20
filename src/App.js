import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import UserTable from './UserTable';
import DrawerAppBar from "./DrawerAppBar";
import SimpleAccordion from "./SimpleAccordion";
import CustomizedTreeView from "./CustomizedTreeView";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditUser from './EditUser'; // Make sure to import the EditUser component
import { createRoot } from 'react-dom/client';

const NoMatch = () => {
    return <div>404 - Not Found</div>;
};

export default class App extends React.Component {
    state = { value: 0 }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    }

    render() {
        const { value } = this.state;

        return (
            <Router>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ border: '2px solid red' }}>
                            <DrawerAppBar />
                        </Grid>
                        <Grid item xs={2}>
                            <SimpleAccordion />
                        </Grid>
                        <Grid item xs={8} style={{ border: '2px solid green' }}>
                            <Tabs value={value} onChange={this.handleChange}>
                                <Tab label="Users" />
                                <Tab label="Item Two" />
                                <Tab label="Item Three" />
                            </Tabs>
                            <Routes>
                                <Route path="*" element={<NoMatch />} />
                                <Route path="/user/edit/:id" element={<EditUser />} />
                            </Routes>
                            {value === 0 && <UserTable />}
                            {value === 1 && <div>Item Two Content</div>}
                            {value === 2 && <div>Item Three Content</div>}
                        </Grid>
                        <Grid item xs={2} style={{ border: '2px solid blue' }}>
                            <CustomizedTreeView />
                        </Grid>
                        <Grid item xs={12} style={{ border: '2px solid orange' }}>
                            aaa
                        </Grid>
                    </Grid>
                </Box>
            </Router>
        );
    }
}
