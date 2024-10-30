
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import InvoiceList from './components/InvoiceList';
import InvoiceDetail from './components/InvoiceDetail';
import {AppBar,Toolbar,Typography,Drawer,List,ListItem,ListItemText } from '@mui/material';

const App=() =>{
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Invoice Management</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <List>
          <ListItem button component="a" href="/invoices">
            <ListItemText primary="Invoices" />
          </ListItem>
        </List>
      </Drawer>
      <main>
        <Routes>
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/invoice-detail/:id" element={<InvoiceDetail />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;