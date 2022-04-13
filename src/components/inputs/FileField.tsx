import Form from 'react-bootstrap/Form';

const FileField = ({
  value,
  readOnly,
  onChange,
}: any) => {
  console.log('FileField: value::::', value);

  const label = (value && value.name) || '';

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
