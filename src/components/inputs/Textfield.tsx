import Form from 'react-bootstrap/Form';

const Textfield = ({
  label,
  value,
  readOnly,
  onChange,
}: any) => {
  const useInput = {
    type: 'text',
    value,
    label,
    onChange: (e: any) => onChange(e.target.value),
    plaintext: readOnly,
    readOnly,
  };

  return (
    <Form.Group controlId={label}>
      <Form.Label>
        {label}
      </Form.Label>
      <Form.Control {...useInput} />
    </Form.Group>
  );
}

export default Textfield;