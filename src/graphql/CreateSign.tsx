import React, { Fragment } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_SIGN = gql`
mutation CreateSign(
  $title: String!,
  $pronounce: String!,
  $definition: String!
) {
  createSign(
    title: $title,
    pronounce: $pronounce,
    definition: $definition
  ) {
    uid
    title
    pronounce
    definition
    state
  }
}
`;

const CreateSign = (props: any) => {
  console.log('AHHHHH props', props);
  // return <h1>Testing...</h1>

  if (!props.newData) return <h1>Loading...</h1>;

  return <h1>Testing...</h1>;
  // const {
  //   title,
  //   pronounce,
  //   definition,
  // } = props;

  // let input;
  // const [addSign, { data }] = useMutation(CREATE_SIGN);

  // return (
  //   <div>
  //     <form
  //       onSubmit={e => {
  //         e.preventDefault();
  //         addTodo({ variables: { type: input.value } });
  //         input.value = '';
  //       }}
  //     >
  //       <input
  //         ref={node => {
  //           input = node;
  //         }}
  //       />
  //       <button type="submit">Add Todo</button>
  //     </form>
  //   </div>
  // );
}

export default CreateSign;
