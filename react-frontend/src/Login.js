import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


function Login() {
  return (
    <Container>
	<Typography variant="h5" align="center">Login</Typography>
	  <Paper>
		<form id="form">
			<Grid 
				container xs={12}
				spacing={4}
				alignContent="center"
				justify="center"
				style={{marginTop: 10}}
			>
				<Grid item xs={9} alignContent="center" style={{textAlign: "center"}}>
				<TextField id="username" label="Username" name="username"/>	
				</Grid>
				<Grid item xs={9} alignContent="center" style={{textAlign: "center"}}>
				<TextField id="password" label="Password" name="password"/>	
				</Grid>
				<Grid item xs={4} alignContent="center" style={{textAlign: "center"}}>
					<Button
						variant="contained"
						color="primary"
						id="track_upload"
						name="submit"
						type="submit"
						fullWidth
					>Submit</Button>
				</Grid>
			</Grid>
			</form>  
	  </Paper>
    </Container>
  );
}

export default Login;
