import React, { useRef, useState } from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

// const UploadInput = (/*props: any*/) => {
//   return (
//     <Form>
//       <FormGroup>
//         <Label for="signTitle">Title</Label>
//         <Input type="email" name="email" id="signTitle" placeholder="with a placeholder" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="examplePassword">Password</Label>
//         <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleSelect">Select</Label>
//         <Input type="select" name="select" id="exampleSelect">
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleSelectMulti">Select Multiple</Label>
//         <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleText">Text Area</Label>
//         <Input type="textarea" name="text" id="exampleText" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleFile">File</Label>
//         <Input type="file" name="file" id="exampleFile" />
//         <FormText color="muted">
//           This is some placeholder block-level help text for the above input.
//           It's a bit lighter and easily wraps to a new line.
//         </FormText>
//       </FormGroup>
//       <FormGroup tag="fieldset">
//         <legend>Radio Buttons</legend>
//         <FormGroup check>
//           <Label check>
//             <Input type="radio" name="radio1" />{' '}
//             Option one is this and that—be sure to include why it's great
//           </Label>
//         </FormGroup>
//         <FormGroup check>
//           <Label check>
//             <Input type="radio" name="radio1" />{' '}
//             Option two can be something else and selecting it will deselect option one
//           </Label>
//         </FormGroup>
//         <FormGroup check disabled>
//           <Label check>
//             <Input type="radio" name="radio1" disabled />{' '}
//             Option three is disabled
//           </Label>
//         </FormGroup>
//       </FormGroup>
//       <FormGroup check>
//         <Label check>
//           <Input type="checkbox" />{' '}
//           Check me out
//         </Label>
//       </FormGroup>
//       <Button>Submit</Button>
//     </Form>
//   );
// }

// export default UploadInput;


const  FileUploadInput = () => {
    const [file, setFile] = useState(''); // storing the uploaded file    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element
    const handleChange = (e: any) => {
        setProgess(0)
        const file = e.target.files[0]; // accesing file
        console.log(file);
        setFile(file); // storing file
    }
    const uploadFile = () => {
        const formData = new FormData();        formData.append('file', file); // appending file
        axios.post('https://local.auth:4000/signs/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress: any = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log(res);
            getFile({ name: res.data.name,
                     path: 'https://local.auth:4000/signs/upload' + res.data.path
                   })
        }).catch(err => console.log(err))}
    return (
        <div>
            <div className="file-upload">
                <input type="file" onChange={handleChange} />                <div className="progessBar" style={{ width: progress }}>
                   {progress}
                </div>
                <button onClick={uploadFile} className="upbutton">                   Upload
                </button>
            <hr />
            {/* displaying received image*/}
            {data.path && <img src={data.path} alt={data.name} />}
            </div>
        </div>
    );
}
export default FileUploadInput;