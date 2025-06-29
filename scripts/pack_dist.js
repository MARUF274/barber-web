// import { Archive, ArchiveCompression, ArchiveFormat } from "libarchive.js/dist/libarchive-node.mjs";
// import fs from 'fs';
// import path from 'path';
// import * as zip from '@zip.js/zip.js';
const path = require("path");
const fs = require("fs");
// const zip = require("@zip.js/zip.js");
const zipper = require('zip-local');

console.log("[WARNING] zip.js Depends need TransformStream to work");
console.log("[WARNING] make sure NodeJS version is 20.11 or higher"); 

function packFolder( source, target ) {
    let buffer = fs.readFileSync('README.md');
    // let blob = new Blob([buffer]);

    // Archive.init({
    //   workerUrl: "./node_modules/libarchive.js/dist/worker-bundle-node.mjs"
    // });

    // return Archive.write({
    //   files: [{ 
    //     file: buffer,
    //     pathname: "README.md",
    //   }],
    //   outputFileName: "test.tar.gz",
    //   compression: ArchiveCompression.GZIP,
    //   format: ArchiveFormat.USTAR,
    //   passphrase: null,
        // });
    zipper.sync.zip(source).compress().save(target);
    console.log("OK");
}

// function initializeWriteZip() {
//         // Creates a BlobWriter object where the zip content will be written.
//     const zipFileWriter = new BlobWriter();
//     // Creates a TextReader object storing the text of the entry to add in the zip
//     // (i.e. "Hello world!").
//     const helloWorldReader = new ("Hello world!");

//     // Creates a ZipWriter object writing data via `zipFileWriter`, adds the entry
//     // "hello.txt" containing the text "Hello world!" via `helloWorldReader`, and
//     // closes the writer.
//     const zipWriter = new ZipWriter(zipFileWriter);
//     return zipWriter.add("hello.txt", helloWorldReader);
// }


console.log("[PLEASE WAIT] Packing dist with zipjs...");
const dateISO = (new Date()).toISOString().replace(/:/g, "-");
packFolder( __dirname + '/../dist', __dirname + '/../dist/iconplus-fe-' + dateISO + '.zip' )
// .then((x) => {
// console.log("[OBARCHIVE] Data ", x);
// }).catch(err => {
//     console.log("Error occurred.", err);    
// });
console.log("Dist packed.");