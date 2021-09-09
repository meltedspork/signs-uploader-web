import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';

const Videofield = ({
  value,
  readOnly,
  onChange,
}: any) => {
  console.log('Videofield: value::::', value);
  const label = /*(value || { name: null }).name ||*/ 'ffff';

  const useInput = {
    label,
    onChange: (e: any) => onChange(e.target.files[0]),
    readOnly,
    custom: true,
    'data-browse': 'Upload',
  };

  if (readOnly && !!value) {
    return <img src={value} alt={label} />;
  } else if (readOnly) {
    return <Fragment />;
  }

  return (
    <Form.Group controlId={label}>
      <Form.Label>
        Video
      </Form.Label>
      <Form.File {...useInput} />
    </Form.Group>
  );
}

export default Videofield;