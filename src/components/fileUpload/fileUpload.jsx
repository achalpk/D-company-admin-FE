import React from "react";
import axios from "axios";
import { useState } from "react";

function FileUpload(){
    const [file,setFile] = useState();

    const upload = ()=>{
        const formData = new FormData()
        formData.append('uploadfile',file)
        console.log(formData)
        axios.post(`http://localhost:9000/upload`, 
            formData, 
            {headers:{'content-type':'multipart/form-data'}}
        )
        .then((res)=>{console.log(res);})
    }
    return(
        <div style={{border:'1px red solid'}}>
            <h3>Upload File</h3>
            <form action="#">
                <input type="file" name="uploadfile" onChange={(e)=>{setFile(e.target.files[0]);console.log(e.target.files[0])}}/>
                <input type="button" onClick={upload} value="Submit"/>
            </form>
        </div>
    )
}

export default FileUpload;