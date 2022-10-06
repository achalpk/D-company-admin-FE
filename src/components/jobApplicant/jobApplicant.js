import React, { useEffect, useState } from 'react';
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
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';


const columns = [
  { id: 'name', label: 'Applicant name', width: '100px', fontWeight:'bold', fontSize:16, backgroundColor:'grey'},
  { id: 'title', label: 'Job title', width: '100px', fontWeight:'bold', fontSize:16, backgroundColor:'grey'},
  { id: 'phone', label: 'Phone', width: '100px', fontWeight:'bold', fontSize:16, backgroundColor:'grey'},
];

export default function JobApplicant() {
  const jobApplicant = useSelector((state)=>state.jobApplicantReducer.jobApplicant);
  const loading = useSelector((state)=>state.jobApplicantReducer.jobApplicantLoading);
  const dispatch = useDispatch();
  const [data,setData] = useState([]);
  const [search,setSearch] = useState('');

  useEffect(()=>{
    dispatch(fetchJobApplicant());
  },[dispatch])

  useEffect(()=>{
    setData(jobApplicant);
  },[jobApplicant])

  const searchRequest = (keyword)=>{
    const searchedData = jobApplicant.filter((row) => {
      return row.phone.toLowerCase().includes(keyword.toLowerCase());
    });
    setData(searchedData)
  }

  const onClickDelete = (id, resume)=>{
    dispatch(deleteJobApplicant(id, resume));
  }


  return (
    <div className='jobApplicant'>
      <div style={{display:'flex', float:'right'}}>
        <IconButton aria-label="search" onClick={()=>searchRequest('')}>
          <AppsIcon/>
        </IconButton>
        <TextField
          id="search"
          placeholder="Search..."
          size="small"
          onChange={(e)=>setSearch(e.target.value)}
        />
        <IconButton aria-label="search" onClick={()=>searchRequest(search)}>
          <SearchIcon/>
        </IconButton>
      </div>
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
                  <>{data.map((row, index) => {
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
                            <DeleteIcon style={{cursor:'pointer'}} color="error" onClick={()=>onClickDelete(row.id,row.resume)}/>
                          </TableCell>
                        </TableRow>
                      );
                    })}</>
                </TableBody>
          </Table>
        </TableContainer>
      
    </div>
  );
}