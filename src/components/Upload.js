// import React, { useRef } from "react";
// import S3 from "react-aws-s3";


// function Upload() {
//   const fileInput = useRef();
  
//   const handleClick = (event) => {
//       event.preventDefault();
//       let file = fileInput.current.files[0];

//       console.log('this is file', file)

//       let newFileName = fileInput.current.files[0].name.replace(/\..+$/, "");
      
//       const config = {
//         bucketName: process.env.REACT_APP_S3_BUCKET,
//       //   dirName: process.env.REACT_APP_DIR_NAME /* optional */,
//         region: process.env.REACT_APP_REGION,
//         accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
//       };
      
//       console.log('this is config', config)

//       const ReactS3Client = new S3(config);

//       console.log('this is reacts3client', ReactS3Client)

//       ReactS3Client.uploadFile(file, newFileName).then((data) => {
//           console.log('this is data', data);
//           if (data.status === 204) {
//             console.log("success");
//           } else {
//             console.log("fail");
//           }
//         });
//       };



//   return (
//     <>
//       <form className='upload-steps' onSubmit={handleClick}>
//         <label>
//           Upload Toy Image:
//           <input type='file' ref={fileInput} />
//         </label>
//         <br />
//         <button type='submit'>Upload</button>
//       </form>
//     </>
//   );
// }

// export default Upload;

import AWS from "aws-sdk";
import { useState } from "react";
import Image from 'react-bootstrap/Image';

function App() {
  // Create state to store file
  const [file, setFile] = useState(null);


  //       const config = {
//         bucketName: process.env.REACT_APP_S3_BUCKET,
//       //   dirName: process.env.REACT_APP_DIR_NAME /* optional */,
//         region: process.env.REACT_APP_REGION,
//         accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
//       };

  // Function to upload file to s3
  const uploadFile = async () => {
    // S3 Bucket Name
    const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;

    // S3 Region
    const REGION = process.env.REACT_APP_REGION;

    // S3 Credentials
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    // Uploading file to s3

    const upload = s3
    
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();
   
    await upload.then((err, data) => {
      console.log(err);
      // File successfully uploaded
      alert("File uploaded successfully.");
      console.log('s3 return', s3)
    });
  };
  // Function to handle file and store it to file state
  const handleFileChange = (e) => {
    // Uploaded file
    const file = e.target.files[0];
    // Changing file state
    setFile(file);
    console.log('this is file', file)
  };

 

  return (
    <div className="App">
      <div>
        <input type="file" onChange={handleFileChange} />
        <Image src="https://xylo-toy-box-app.s3.amazonaws.com/6.png" thumbnail/>
        <button onClick={uploadFile}>Upload</button>
      </div>
    </div>
  );
}

export default App;