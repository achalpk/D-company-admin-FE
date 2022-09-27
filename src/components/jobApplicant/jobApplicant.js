import React, { useEffect } from 'react';
import './jobApplicant.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {fetchJobApplicant, deleteJobApplicant} from '../../APIs/jobApplicant/jobApplicant';
import Table from '@mui/material/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const columns = [
  { id: 'name', label: 'Applicant name', width: '100px', fontWeight:'bold', fontSize:16, backgroundColor:'grey'},
  { id: 'title', label: 'Job title', width: '100px', fontWeight:'bold', fontSize:16, backgroundColor:'grey'},
];

export default function JobApplicant() {
  const jobApplicant = useSelector((state)=>state.jobApplicantReducer.jobApplicant);
  const loading = useSelector((state)=>state.jobApplicantReducer.jobApplicantLoading);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchJobApplicant());
  },[dispatch])

  const onClickDelete = (id)=>{
    dispatch(deleteJobApplicant(id));
  }


  return (
    <div className='jobApplicant'>
      <ToastContainer autoClose={3000}/>
      <br/>
      <br/>
      {loading.show?
        <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'500px' }}>
          <CircularProgress/>&nbsp;&nbsp;
          <h3>Loading...</h3>
        </Box>
        :null
      }
        <TableContainer sx={{ minHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ width: column.width, fontWeight: column.fontWeight, fontSize: column.fontSize, backgroundColor: column.backgroundColor}}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell
                  key='action'
                  style={{ width: 150, fontWeight: 'bold', fontSize: 16, backgroundColor: 'grey'}}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
                <TableBody>
                  {jobApplicant.map((row, index) => {
                      return (
                        <TableRow hover  key={index}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} >
                                <p>{value || "Nil"}</p>
                              </TableCell>
                            );
                          })}
                          <TableCell key={row.id}>
                            <Link 
                              to={{
                                pathname: "/viewJobApplicant",
                                state: {viewData: row}
                                }} 
                              className='Links'
                            >
                              <VisibilityIcon/>
                            </Link>
                            &nbsp;
                            &nbsp;
                            <DeleteIcon style={{cursor:'pointer'}} color="error" onClick={()=>onClickDelete(row.id)}/>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
          </Table>
        </TableContainer>
      
    </div>
  );
}