import{AccordionContext, useAccordionButton} from 'react-bootstrap';
import {useContext} from 'react';

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <span
        style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'white' }}
        onClick={decoratedOnClick}
      >
        {children}
      </span>
    );
}

export default ContextAwareToggle;