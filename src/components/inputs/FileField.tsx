import Form from 'react-bootstrap/Form';

const FileField = ({
  readOnly = false,
  onChange,
  file,
}: any) => {
  const label = (file && file.name) || '';

  const useInputFile = {
    label,
    onChange: (e: any) => onChange(e.target.files[0]),
    readOnly,
    custom: true,
    'data-browse': 'Upload',
  };

  return <Form.File {...useInputFile} />;
}

export default FileField;
