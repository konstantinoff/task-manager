import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import addPhoto from "./add-photo.svg";

const ThumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
`;

const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

const DropzoneContainer = styled.section`
  cursor: pointer;
  text-align: center;
  border-bottom: 2px solid #000000;
  padding-bottom: 10px;
  margin-bottom: 9px;
`;

function Previews(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    // multiple: false,
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map(file => (
    <Thumb key={file.name}>
      <ThumbInner>
        <Img src={file.preview} />
      </ThumbInner>
    </Thumb>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <DropzoneContainer>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {!files.length && (
          <img width="50px" height="50px" src={addPhoto} alt="" />
        )}
      </div>
      <ThumbsContainer>{thumbs}</ThumbsContainer>
    </DropzoneContainer>
  );
}

export default Previews;
