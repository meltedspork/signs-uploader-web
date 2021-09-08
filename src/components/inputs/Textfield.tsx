import Form from 'react-bootstrap/Form';

const Textfield = ({
  label,
  value,
  readOnly,
  onChange,
}: any) => {

  return (
    <Form.Group controlId={label}>
      <Form.Label>
        {label}
      </Form.Label>
      <Form.Control type="text" placeholder={label} value={value} onChange={(e: any) => onChange(e.target.value)} plaintext={readOnly} readOnly={readOnly} />
    </Form.Group>
  );
}

export default Textfield;