import { Modal, Button } from '@goorm-dev/gds-challenge';

function CustomModal({isOpen, toggle}) {
	return (
		<div>
   	  	  <Modal isOpen={isOpen} toggle={toggle}>
        	<Modal.Header toggle={toggle}>
            헤더
        	</Modal.Header>
          <Modal.Body>
            컨텐츠를 넣어주세요.
          </Modal.Body>
          <Modal.Footer>
            <Button>다음</Button>
          </Modal.Footer>
   		 </Modal>
		</div>
	);
}

export default CustomModal;