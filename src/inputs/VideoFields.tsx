import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import VideoImage from './VideoModal';
import VideoField from './VideoField';
import FileField from './FileField';

const VideoFields = ({
  title,
  videos,
  videoFile,
  onChange,
  readOnly,
}: any) => {
  console.log('VideoFields: videos::::', videos);
  console.log('VideoFields: videoFile::::', videoFile);

  if (readOnly) {
    return (
      <Form.Group controlId={`Sign Videos`}>
        <Container fluid>
        {(videos || []).map((video: any, key: number) => <VideoImage key={key} index={key} video={video} title={title} />)}
        </Container>
      </Form.Group>
    );
  }

  return (
    <Form.Group controlId='VideoFields'>
      <Form.Label>
        Video
      </Form.Label>
      {(videos || []).map((video: any, key: number) => <VideoField key={key} index={key} video={video} />)}
      <FileField key={(videos.length + 1)} onChange={onChange} file={videoFile} />
    </Form.Group>
  );
}

export default VideoFields;