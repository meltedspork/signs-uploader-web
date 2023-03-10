import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const VideoImage = ({
  index,
  video,
  title,
}: any) => {
  console.log('VideoImage: video::::', video);  

  const {
    uid,
    src,
  } = video;
  const useInput = {
    alt: `${title} Sign #${index} (${uid})`,
    src,
    thumbnail: true,
  };
  return (
    <Row>
      <Col>
        <Image {...useInput} />
      </Col>
    </Row>
  );
}

export default VideoImage;
