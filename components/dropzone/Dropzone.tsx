import React from 'react'
import { useDropzone } from 'react-dropzone';

interface Props { }

function Dropzone(props: Props) {
    const { } = props
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: {
            'image/jpeg': [],
            'image/png': []
        }
    });
    console.log(acceptedFiles)
    const acceptedFileItems = acceptedFiles.map((file: any) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }: any) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
                {errors.map((e: any) => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>
    ));


    return (
        <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <em>(Only *.jpeg and *.png images will be accepted)</em>
            </div>
            <aside>
                <h4>Accepted files</h4>
                <ul>{acceptedFileItems}</ul>
                <h4>Rejected files</h4>
                <ul>{fileRejectionItems}</ul>
            </aside>
        </section>
    );
}

export default Dropzone
