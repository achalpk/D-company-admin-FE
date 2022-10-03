import React, { useEffect } from 'react';
import './job.css'
import { useSelector, useDispatch } from 'react-redux';
import {fetchJob, deleteJob} from '../../APIs/job/job';
import AddJob from './addJob/addJob';
import Table from '@mui/material/Table';
import DeleteIcon from '@mui/icons-material/Delete';
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
  { id: 'title', label: 'Title', width: '200px', fontWeight:'bold', fontSize:16, backgroundColor:'grey'},
  { id: 'description', label: 'Description', width:'200px', fontWeight:'bold',fontSize:16, backgroundColor:'grey' },
  { id: 'experience', label: 'Experience', width: '200px', fontWeight:'bold', fontSize:16, backgroundColor:'grey'},
  { id: 'location', label: 'Location', width:'200px', fontWeight:'bold',fontSize:16, backgroundColor:'grey' },
];

export default function Job() {
  const job = useSelector((state)=>state.jobReducer.job);
  const jobLoading = useSelector((state)=>state.jobReducer.jobLoading);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchJob());
  },[dispatch])

  const onClickDelete = (id)=>{
    dispatch(deleteJob(id));
  }


  return (
    <div className='job'>
      <ToastContainer autoClose={3000}/>
      <div style={{textAlign:'center'}}>
        <AddJob/>
      </div>
      <br/>
      <br/>
      {jobLoading.show?
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
                style={{ width: 120, fontWeight: 'bold', fontSize: 16, backgroundColor: 'grey'}}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {job.map((row, index) => {
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