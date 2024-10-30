import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextField, FormGroup, Paper } from '@mui/material';

const InvoiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [invoice,setInvoice] = useState({
    Id: id || '',
    Date: new Date().toISOString().split('T')[0],
    InvoiceNumber: 1, // Placeholder for auto-increment logic
    CustomerName: '',
    BillingAddress: '',
    ShippingAddress: '',
    GSTIN: '',
    Items: [],
    BillSundrys: [],
    TotalAmount: 0,
  });

  useEffect(() => {
    // If in edit mode, fetch the invoice data by id
    if (id && id !== '0') {
      // Fetch logic here
    }
  }, [id]);

  const saveInvoice = () => {
    // Save logic here
    navigate('/invoices');
  };

  const cancel = () => {
    navigate('/invoices');
  };

  return (
    <Paper>
      <h2>{id === '0' ? 'Create Invoice' : 'Edit Invoice'}</h2>
      <FormGroup>
        <TextField
          label="Customer Name"
          variant="outlined"
          value={invoice.CustomerName}
          onChange={(e) => setInvoice({ ...invoice, CustomerName: e.target.value })}
          required
        />
        <TextField
          label="Billing Address"
          variant="outlined"
          value={invoice.BillingAddress}
          onChange={(e) => setInvoice({ ...invoice, BillingAddress: e.target.value })}
          required
        />
        <TextField
          label="Shipping Address"
          variant="outlined"
          value={invoice.ShippingAddress}
          onChange={(e) => setInvoice({ ...invoice, ShippingAddress: e.target.value })}
          required
        />
        <TextField
          label="GSTIN"
          variant="outlined"
          value={invoice.GSTIN}
          onChange={(e) => setInvoice({ ...invoice, GSTIN: e.target.value })}
          required
        />
        {/* Add fields for Items and Bill Sundries with proper validation */}
        <Button variant="contained" onClick={saveInvoice}>Save</Button>
        <Button variant="outlined" onClick={cancel}>Cancel</Button>
      </FormGroup>
    </Paper>
  );
};

export default InvoiceDetail;
