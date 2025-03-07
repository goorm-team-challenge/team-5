import React, { useState } from 'react';
import { CarouselIndicators, Modal, Button } from '@goorm-dev/gds-challenge';
import { Modal_1, Modal_2, Modal_3, Modal_4} from '@/components';

function CustomModal({isOpen, onlySetOpenToggle}) {
	
  const [currentPage, setCurrentPage] = useState(1);
	
  const toggle = () => {
	  onlySetOpenToggle();	
  };
	
  const [form1Data, setForm1Data] = useState({
    name: '',
    phoneNumber: '',
    email: '',
	isAll: true,
	isPersonal : true,
	isMarketing : true,
	isAd : true,
	isEmail : true,
	isSMS : true,
  });
	
  const [form3Data, setForm3Data] = useState({
	  selectedButton: 0,
	  selectedContent: '',
  })
		

  const nextPage = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    } else {
      toggle(); // 모달 닫기
    }
  };
	
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
	
	return (
		<div>
   	  	  <Modal isOpen={isOpen} >
        	<Modal.Header toggle={toggle}>
            
        	</Modal.Header>
          <Modal.Body>
             {currentPage === 1 && <Modal_1 formData={form1Data} setFormData={setForm1Data}/>}
          	 {currentPage === 2 && <Modal_2/>}
        	 {currentPage === 3 && <Modal_3 formData={form3Data} setFormData={setForm3Data}/>}
      		 {currentPage === 4 && <Modal_4/>}
          </Modal.Body>
          <Modal.Footer between>
		    <CarouselIndicators length={4} activeIndex={currentPage - 1} onClickWithIndex={(index) => setCurrentPage(index + 1)}></CarouselIndicators>
            <div>          
				{currentPage !== 1 && <Button onClick={prevPage} color="link">이전</Button>}
            	{currentPage < 4 ? <Button onClick={nextPage}>다음</Button> : <Button onClick={toggle}>제출하기</Button>}
		    </div>
	      </Modal.Footer>
   		 </Modal>
		</div>
	);
}

export default CustomModal;