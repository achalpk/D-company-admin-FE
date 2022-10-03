import React from "react";
import { Link, useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions, Button } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


export default function ViewJobApplicant() {
    const location = useLocation();
    const { viewData } = location.state;
    return (
    <div>
        <Card sx={{ width: '700px', mt:5, p:3, maxHeight:'content-fit'}}>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                <b>{viewData.title}</b>
            </Typography>
            <CardContent>
                <p><b>Name : </b>{viewData.name}</p>
                <p><b>Phone : </b>{viewData.phone}</p>
                <p><b>Email : </b>{viewData.email}</p>
                <p><b>Address : </b>{viewData.address}</p>
                {/* <p><b>Date Of Birth : </b>{new Date(viewData.dob).toISOString().substr(0,10)}</p> */}
                <p><b>Resume : </b><a target="_blank" rel="noreferrer" href={`http://localhost:9000/${viewData.resume}`}>{viewData.resume}</a></p>
            </CardContent>
            <CardActions>
            <Link to='/Job Applicant' className='Links'><Button size="small"><ArrowLeftIcon fontSize='medium'/>Back to Job Applicant</Button></Link>
            </CardActions>
        </Card>
    </div>
  );
}
