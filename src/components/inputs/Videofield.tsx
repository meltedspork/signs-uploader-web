import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const Videofield = ({
  value,
  readOnly,
  onChange,
  enableDelete,
}: any) => {
  console.log('Videofield: value::::', value);

  const label = (value /*&& value.name*/) || '';

  if (enableDelete) {
    const useInputId = `delete-${label}`
    const useInputText = {
      'aria-describedby': useInputId,
      'aria-label': label,
      placeholder: label,
      plaintext: true,
      readOnly: true,
    };
    const useInputButton= {
      id: useInputId,
      variant: 'danger',
      onChange: (e: any) => onChange(e.target.value),
      plaintext: readOnly,
      readOnly,
    };

    return (
      <InputGroup className="mb-3">
        <FormControl {...useInputText} />
        <Button {...useInputButton}>
          Delete
        </Button>
      </InputGroup>
      )
  }

  const useInputFile = {
    label,
    onChange: (e: any) => onChange(e.target.files[0]),
    readOnly,
    custom: true,
    'data-browse': 'Upload',
  };

  return <Form.File {...useInputFile} />;
}

export default Videofield;
