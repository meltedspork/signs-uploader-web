// import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import VideoImages from './VideoImages';
import VideoField from './VideoField';
import FileField from './FileField';

const VideoFields = ({
  title,
  videos,
  onChange,
  readOnly,
}: any) => {
  console.log('VideoFields: videos::::', videos);

  if (readOnly) {
    return <VideoImages videos={videos} title={title} />
  }

  return (
    <Form.Group controlId='VideoFields'>
      <Form.Label>
        Video
      </Form.Label>
      {(videos || []).map((video: any, key: number) => <VideoField key={key} index={key} video={video} />)}
      <FileField key={(videos.length + 1)} value="" onChange={onChange} readOnly={readOnly} />
    </Form.Group>
  );
}

export default VideoFields;