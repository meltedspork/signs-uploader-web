import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const VideoImages = ({
  title,
  videos,
}: any) => {
  console.log('VideoImage: videos::::', videos);  

  const videoImage = (videos || []).map((video: any, key: number) => {
    console.log('_____video', video);
    const {
      uid,
      src,
    } = video;
    const useInput = {
      alt: `${title} Sign #${key}`,
      src,
      thumbnail: true,
    };
    return (
      <Row key={key}>
        <Col>
          <Image {...useInput} />
        </Col>
      </Row>
    );
  });

  return (
    <Form.Group controlId={`Sign Videos`}>
      <Container fluid>
        {videoImage}
      </Container>
    </Form.Group>
  )
}

export default VideoImages;
