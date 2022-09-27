import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './services.css';
import {fetchServices, deleteService} from '../../APIs/services/services';
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
import AddService from './addService/addService';
import EditService from './editService/editService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const columns = [
  { id: 'title', label: 'Title', width: 200, fontWeight:'bold', fontSize:16, backgroundColor:'grey'},
  { id: 'short_desc', label: 'Short description', width: 200, fontWeight:'bold',fontSize:16, backgroundColor:'grey' },
  { id: 'long_desc', label: 'Long description', width: 200, fontWeight:'bold', fontSize:16, backgroundColor:'grey' },
  { id: 'image', label: 'Image', width: 200, align: 'left', fontWeight:'bold',fontSize:16, backgroundColor:'grey' },
];

export default function Services() {
  const services = useSelector((state)=>state.servicesReducer.services);
  const loading = useSelector((state)=>state.servicesReducer.loading);
  const dispatch = useDispatch();
  const [editData,setEditData]=useState(false);

  useEffect(()=>{
    dispatch(fetchServices());
  },[dispatch])

  const onClickDelete = (id, image)=>{
    dispatch(deleteService(id, image));
  }


  return (
    <div className='services'>
      <ToastContainer autoClose={3000}/>
      <div style={{textAlign:'center'}}>
        <AddService/>
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
                  style={{ width: 200, fontWeight: 'bold', fontSize: 16, backgroundColor: 'grey'}}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
                <TableBody>
                  {services.map((row, index) => {
                      return (
                        <TableRow hover  key={index}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell align={column.align} key={column.id} style={{ width: column.width}}>
                                {column.id==='image'?
                                  <img className='service-img' src={`http://localhost:9000/${value}`} width='70' height='50'  alt={value} />
                                  : <p style={{width:'200px', overflow:'hidden'}}>{value || "Nil"}</p>
                                }
                              </TableCell>
                            );
                          })}
                          <TableCell key={row.id}>
                            <Link 
                              to={{
                                pathname: "/viewService",
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
                            <DeleteIcon style={{cursor:'pointer'}} color="error" onClick={()=>onClickDelete(row.id, row.image)}/>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
          </Table>
        </TableContainer>
      {editData && <EditService editData = {editData} setEditData = {setEditData}/> }
      
    </div>
  );
}