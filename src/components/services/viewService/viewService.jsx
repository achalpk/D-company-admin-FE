import React from "react";
import { Link, useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions, Button } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export default function ViewService() {
    const location = useLocation();
    const { viewData } = location.state;
  return (
    <div>
        <Card sx={{ width: '700px', mt:1, p:3, maxHeight:'content-fit', textAlign:'center'}}>
            <Typography gutterBottom variant="h5" component="div">
                <b>{viewData.title}</b>
            </Typography>
            <CardMedia
            component="img"
            height="340"
            image={`http://localhost:9000/${viewData.image}`}
            alt="green iguana"
            />
            <CardContent>
                <Typography variant="body2" color="text.primary">
                    <p><b>Short Description : </b>{viewData.short_desc}</p>
                    <p><b>Long Description : </b>{viewData.long_desc}</p>
                </Typography>
            </CardContent>
            <CardActions>
            <Link to='/services' className='Links'><Button size="small"><ArrowLeftIcon fontSize='medium'/>Back to Services</Button></Link>
            </CardActions>
        </Card>
    </div>
  );
}
