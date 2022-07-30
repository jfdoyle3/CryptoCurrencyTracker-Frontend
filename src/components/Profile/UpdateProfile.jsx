import React, {UseState} from 'react';
import Form from '../common/Form';
import Input from '../common/Input';
import FaButton from '../faCommon/FaButton';
import InlineInputContainer from '../common/InlineInputContainer';


const UpdateProfile =(props) =>{

  const {id , name}=props.tracker
  


  return (
    <div>
      <h1 style={{alignItems: "center"}}>Update Profile</h1>
      <Form
      // onSubmit={handleSubmit}
      style={{
        maxWidth: '800px',
        width: '100%'
      }}
    >
      <InlineInputContainer>
        <Input
          id="name"
          placeholder="name"
          type="name"
          // onChange={handleChange}
          // value={query.name}
          required
        />
      </InlineInputContainer>
      <FaButton>Save</FaButton>
    </Form>
  </div>
    
  )
}

export default UpdateProfile;