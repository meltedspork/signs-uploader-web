import { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

const VideoModal = ({
  index,
  video,
  title,
}: any) => {
  console.log('VideoImage: video::::', video);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    uid,
    src,
  } = video;
  const useInput = {
    alt: `${title} Sign #${index} (${uid})`,
    src,
    thumbnail: true,
  };
  // return (
  //   <Row>
  //     <Col>
  //       <Image {...useInput} />
  //     </Col>
  //   </Row>
  // );
  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal animation={false} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image {...useInput} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default VideoModal;
