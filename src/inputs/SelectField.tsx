import Form from 'react-bootstrap/Form';
import Select from 'react-select';

const SelectField = ({
  label,
  value,
  options,
  readOnly,
  onChange,
}: any) => {
  const transformLabelMap = (v: any) => v.map(({ name, uid }: any) => ({ label: name, value: uid }));
  const transformNameMap = (v: any) => v.map(({ label, value }: any) => ({ name: label, uid: value }));
  const useSelect = {
    isMulti: true,
    value: transformLabelMap(value),
    options: transformLabelMap(options),
    onChange: (value: any) => onChange(transformNameMap(value)),
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

export default SelectField;