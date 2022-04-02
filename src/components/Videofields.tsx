import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Videofield from './inputs/Videofield';

const Videofields = ({
  data,
  readOnly,
}: any) => {
  console.log('Videofields: data::::', data);
  const onChange = (e: any) => console.log('yo!!!', e);

  if (readOnly) return <Fragment />;

  const videoUrls = (data || []).map((src: any, key: number) => {
    return <Videofield key={key} value={src} onChange={onChange} enableDelete={true} readOnly={readOnly} />
  });

  return (
    <Form.Group controlId='Videofields'>
      <Form.Label>
        Video
      </Form.Label>
      {videoUrls}
      <Videofield key={(videoUrls.length + 1)} value="" onChange={onChange} readOnly={readOnly} />
    </Form.Group>
  );
}

export default Videofields;