import { useContext } from 'react';
import ResourceContext from '../../contexts/ResourceContext';
import { gql, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';
// import resourceConstant from '../../constants/resourceConstant';

// const VIDEO_RESOURCE = resourceConstant.VIDEO.resource;
const VIDEO_DELETE_QUERY: string = `
mutation DeleteVideo(
  $uid: UUID!,
  $signUid: UUID!,
) {
  deleteVideo(
    uid: $uid,
    signUid: $signUid,
  ) {
    sign {
      name
      pronounce
      definition
      state
      topics {
        uid
        name
      }
      videos {
        uid
        title
        src
      }
    }
    topics {
      uid
      name
    }
  }
}
`;

const DeleteVideo = (props: any) => {
  const { videoUid } = props;
  const graphqlQuery = gql(VIDEO_DELETE_QUERY);
  const {
    uid,
    data,
    setData,
    setInputData,
    setReadOnly,
    setResetReadOnly,
  } = useContext(ResourceContext);
  const variables = {
    uid: videoUid,
    signUid: uid,
  }
  const [deleteResource] = useMutation(graphqlQuery);
  

  const onClickDeleteResource = async (e: any) => {
    e.preventDefault();

    console.log('DeleteResource::::::::::::');
    console.log('DeleteResource::::::::::::');
    console.log('DeleteResource::::::::::::');
    console.log('DeleteResource::::::::::::');
    console.log('DeleteResource::::::::::::');
    console.log('DeleteResource::::::::::::');
    console.log('DeleteResource::::::::::::');
    console.log('DeleteResource::::::::::::');
    console.log('DeleteResource:::::::::::: start');
    console.log('DeleteResource: variables:', variables);
    console.log('DeleteResource:::::::::::: data', data);
    console.log('DeleteResource:::::::::::: end');
    const { data: videoData } = await deleteResource({ variables });
    console.log('videoData', videoData);
    const deletedData = videoData['deleteVideo'];
    setInputData(deletedData);
    setData(deletedData);
    setReadOnly(true);
    setResetReadOnly(true);
  }

  return (
    <Button variant="danger" type="button" onClick={onClickDeleteResource}>
      Delete
    </Button>
  );
}

export default DeleteVideo;
