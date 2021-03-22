import React, { useState } from 'react';
import useStyles from './styles';
import { Paper, TextField, Button, Typography } from '@material-ui/core';

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    tags: '',
    message: '',
    selectedFile: ''
  });
  const classes = useStyles();
  const handleSubmit = () => {
    console.log('hi');
  }
  return (
    <Paper className={classes.paper}>
      <form className={classes.form} noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating a memory</Typography>
        <TextField 
          name='creator' 
          variant='outlined' 
          label='Creator' 
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ creator: e.target.value })} 
        />
      </form>
    </Paper>
  )
}

export default Form;
