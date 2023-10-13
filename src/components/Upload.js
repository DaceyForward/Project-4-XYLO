import React, { useRef } from "react";
import S3 from "react-aws-s3";

function Upload() {
  const fileInput = useRef();
  
  const handleClick = (event) => {
      event.preventDefault();
      let file = fileInput.current.files[0];

      console.log('this is file', file)

      let newFileName = fileInput.current.files[0].name.replace(/\..+$/, "");
      
      const config = {
        bucketName: process.env.S3_BUCKET,
      //   dirName: process.env.REACT_APP_DIR_NAME /* optional */,
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      };
      
      console.log('this is config', config)

      const ReactS3Client = new S3(config);

      console.log('this is reacts3client', ReactS3Client)
      
      ReactS3Client.uploadFile(file, newFileName).then((data) => {
          console.log(data);
          if (data.status === 204) {
            console.log("success");
          } else {
            console.log("fail");
          }
        });
      };



  return (
    <>
      <form className='upload-steps' onSubmit={handleClick}>
        <label>
          Upload Toy Image:
          <input type='file' ref={fileInput} />
        </label>
        <br />
        <button type='submit'>Upload</button>
      </form>
    </>
  );
}

export default Upload;