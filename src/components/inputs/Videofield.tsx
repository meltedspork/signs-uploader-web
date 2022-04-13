import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import DeleteVideo from '../graphql/DeleteVideo';

const VideoField = ({
  index,
  video,
}: any) => {
  console.log('VideoField: video::::', video);
  const {
    uid,
    title,
    src,
  } = video;

  const useInputText = {
    'aria-describedby': `delete-${uid}`,
    'aria-label': title,
    placeholder: title,
    plaintext: true,
    readOnly: true,
  };
  const useInputThumbnail = {
    alt: `${title} Sign #${index}`,
    src,
    rounded: true,
    thumbnail: true,
  };

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>
        <Image {...useInputThumbnail} />
      </InputGroup.Text>
      <FormControl {...useInputText} />
      <DeleteVideo videoUid={uid} />
    </InputGroup>
  )
}

export default VideoField;
