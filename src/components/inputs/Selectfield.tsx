import Form from 'react-bootstrap/Form';
import Select from 'react-select';

const Selectfield = ({
  label,
  value,
  options,
  readOnly,
  onChange,
}: any) => {
  const labelMap = (v: any) => v.map(({ name, uid }: any) => ({ label: name, value: uid }));
  const nameMap = (v: any) => v.map(({ label, value }: any) => ({ name: label, uid: value }));
  const useSelect = {
    isMulti: true,
    value: labelMap(value),
    options: labelMap(options),
    onChange: (value: any) => onChange(nameMap(value)),
    isDisabled: readOnly,
  };

  return (
    <Form.Group controlId={label}>
      <Form.Label>
        {label}
      </Form.Label>
      <Select {...useSelect} />
    </Form.Group>
  );
}

export default Selectfield;