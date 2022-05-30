import { useContext } from 'react';

import styled from 'styled-components';
import NotificationContext from '../../store/notification-context';

const StyledNotification = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  background-color: #1b1b1b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.5rem 10%;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2);

  h2 {
    margin: 0;
    font-size: 1.25rem;
    color: white;
  }

  &.pending {
    background-color: #177cbe;
  }

  &.success {
    background-color: #10be58;
  }

  &.error {
    background-color: #e65035;
  }
`;

export default function Notification(props) {
  const NotificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClass = '';

  if (status === 'success') {
    statusClass = 'success';
  }

  if (status === 'error') {
    statusClass = 'error';
  }

  if (status === 'pending') {
    statusClass = 'pending';
  }

  return (
    <StyledNotification
      className={statusClass}
      onClick={NotificationCtx.hideNotification}
    >
      <h2>{title}</h2>
      <p>{message}</p>
    </StyledNotification>
  );
}
