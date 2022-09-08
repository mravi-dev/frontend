import React from "react";
import CSVReader from "react-csv-reader";


const handleForce = (data, fileInfo) => console.log(data, fileInfo);

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
};


const CSVImport = () => {
  return (
    <div className="container">
    <CSVReader
      cssClass="react-csv-input"
      label="Upload File"
      onFileLoaded={handleForce}
      parserOptions={papaparseOptions}
    />
  </div>
  )
}

export default CSVImport

