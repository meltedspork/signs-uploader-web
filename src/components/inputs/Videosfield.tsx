import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Videosfield = ({
  title,
  value,
  readOnly,
}: any) => {
  console.log('Videofield: value::::', value);  

  const videoUrls = value.map((src: any, key: number) => {
    const useInput = {
      alt: `${title} Sign #${key}`,
      key,
      src,
      fluid: true,
      rounded: true,
      thumbnail: true,
    };
    return (
      <Row>
        <Col>
          <Image {...useInput} />
        </Col>
      </Row>
    );
  });

  if (readOnly) {
    return (
      <Form.Group controlId={`Sign Videos`}>
        <Container fluid>
          {videoUrls}
        </Container>
      </Form.Group>
    )
  }

  return <Fragment />;
}

export default Videosfield;