import React, { useState } from 'react';
import { CarouselIndicators, Modal, Button } from '@goorm-dev/gds-challenge';
import { Modal_1, Modal_2, Modal_3, Modal_4} from '@/components';

function CustomModal({isOpen, toggle}) {
	
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    } else {
      toggle(); // 모달 닫기
    }
  };
	
	return (
		<div>
   	  	  <Modal isOpen={isOpen} toggle={toggle}>
        	<Modal.Header toggle={toggle}>
            헤더
        	</Modal.Header>
          <Modal.Body>
             {currentPage === 1 && <Modal_1/>}
          	 {currentPage === 2 && <Modal_2/>}
        	 {currentPage === 3 && <Modal_3/>}
        	 {currentPage === 4 && <Modal_4/>}
          </Modal.Body>
          <Modal.Footer between>
		    <CarouselIndicators length={4} activeIndex={currentPage - 1} onClickWithIndex={(index) => setCurrentPage(index + 1)}></CarouselIndicators>
            <Button onClick={nextPage}>다음</Button>
          </Modal.Footer>
   		 </Modal>
		</div>
	);
}

export default CustomModal;