import React from 'react';
import { Link } from 'react-router-dom';

const ChannelIndexItem = ({ channel, openModal }) => {
  return (
    <div className="channel-index-item">
      <Link to={`/channels/@me/${channel.serverId}/${channel.id}`}>
        <div id="channel-index-name">#{channel.name}</div>
      </Link>

      <Link to={`/channels/@me/${channel.serverId}/${channel.id}`}>
        <div id="channel-index-edit-button" tabIndex="0" role="button" onClick = {() => openModal('edit-channel')}>
          <svg className="action-icon" aria-hidden="false" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
            </path>
          </svg>
        </div>
      </Link>

      {/* COMMENT
      need to change this
          currently, this is only changing the URL. what I want to do is unmount the chatroom component and then automatically mount it upon the page loading
          POSSIBLE THINGS TO TRY:
          Rather than having a Link, have an event listener
          that does two things:
          (1) unmounts manually
            - ReactDOM.unmountComponentAtNode(container)
              - Remove a mounted React component from the DOM and clean up its event handlers and state. 
              - If no component was mounted in the contaienr, calling this function does nothing. 
              - Returns true if a component was unmounted and false if there was no component to unmount.
          (2) pushes history to the chat channel
      */}

    </div>
  )
}

export default ChannelIndexItem;