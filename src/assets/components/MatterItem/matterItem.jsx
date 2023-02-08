import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './matterItem.css';

const MatterItem = (props) => {
    const {matter} = props 
    const {id,subject, body, language, href,view_href,search_snippet, post_time,popularity} = matter
    return (
        <div className='matter'>
           
          
            <p><span>id:</span>{id}</p>
            <p><span>subject:</span>{subject}</p>
            <p><span>Popularity:{popularity}</span></p>
          
          <Dialog.Root>
    <Dialog.Trigger asChild>
    <button className="glow-on-hover" size="large">
        Click here
      </button>
    </Dialog.Trigger>
    <Dialog.Portal className='container-box'>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Box Message</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Id:{id}
        </Dialog.Description>
        <Dialog.Description className="DialogDescription">
          <h4>Subject:{subject}</h4>
        </Dialog.Description>
        <Dialog.Description className="DialogDescription">
          <h4>Body:{body}</h4>
        </Dialog.Description>
        <Dialog.Description className="DialogDescription">
          <h4>Language:{language}</h4>
        </Dialog.Description>
        <Dialog.Description className="DialogDescription">
          <h4>Href:{href}</h4>
        </Dialog.Description>
        <Dialog.Description className="DialogDescription">
          <h4>View Href:{view_href}</h4>
        </Dialog.Description>
        <Dialog.Description className="DialogDescription">
          <h4>Snippet:{search_snippet}</h4>
        </Dialog.Description>
        <Dialog.Description className="DialogDescription">
          <h4>Post Time:{post_time}</h4>
        </Dialog.Description>
        
    
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className="glow-on-hover">Back</button>
            

          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  </div>
);
       
}
  

export default MatterItem;