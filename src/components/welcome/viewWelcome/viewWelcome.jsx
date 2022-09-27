import React from "react";
import { Link, useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions, Button } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export default function ViewWelcome() {
    const location = useLocation();
    const { viewData } = location.state;
  return (
    <div>
        <Card sx={{ width: '700px', mt:5, p:3, maxHeight:'content-fit', textAlign:'center'}}>
            <Typography gutterBottom variant="h5" component="div">
                <b>{viewData.title}</b>
            </Typography>
            <CardContent>
                <Typography variant="body2" color="text.primary">
                    <b>Description : </b>{viewData.desc}
                    <br/>
                    <br/>

                </Typography>
            </CardContent>
            <CardActions>
            <Link to='/welcome' className='Links'><Button size="small"><ArrowLeftIcon fontSize='medium'/>Back to Welcome</Button></Link>
            </CardActions>
        </Card>
    </div>
  );
}
