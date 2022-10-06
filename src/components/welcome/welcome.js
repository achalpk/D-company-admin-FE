import React, { useEffect, useState } from 'react';
import './welcome.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {fetchWelcome, deleteWelcome} from '../../APIs/welcome/welcome';
import AddWelcome from './addWelcome/addWelcome';
import EditWelcome from './editWelcome/editWelcome';
import Table from '@mui/material/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const columns = [
  { id: 'title', label: 'Title', width: '100px', fontWeight:'bold', fontSize:16, backgroundColor:'grey'},
  { id: 'desc', label: 'Description', width:'200px', fontWeight:'bold',fontSize:16, backgroundColor:'grey' },
];

export default function Welcome() {
  const welcome = useSelector((state)=>state.welcomeReducer.welcome);
  const welcomeLoading = useSelector((state)=>state.welcomeReducer.welcomeLoading);
  const dispatch = useDispatch();
  const [editData,setEditData]=useState(false);

  useEffect(()=>{
    dispatch(fetchWelcome());
  },[dispatch])

  const onClickDelete = (id)=>{
    dispatch(deleteWelcome(id));
  }


  return (
    <div className='welcome'>
      <div style={{textAlign:'center'}}>
        <AddWelcome/>
      </div>
      <br/>
      <br/>
      {welcomeLoading.show?
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
                  {welcome.map((row, index) => {
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
                                pathname: "/viewWelcome",
                                state: {viewData: row}
                                }} 
                              className='Links'
                            >
                              <VisibilityIcon/>
                            </Link>
                            &nbsp;
                            &nbsp;
                            <EditIcon onClick={()=>setEditData(row)}  style={{cursor:'pointer'}} color="primary"/>
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
        {editData && <EditWelcome editData = {editData} setEditData = {setEditData}/> }
      
    </div>
  );
}