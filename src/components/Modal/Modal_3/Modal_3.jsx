import { Typography, Button} from '@goorm-dev/gds-challenge';

function Modal_3({ formData, setFormData }) {
	
  const handleButtonClick = (buttonNumber, content) => {
    setFormData({
      ...formData,
      selectedButton: buttonNumber,
      selectedContent: content,
    });
  };
	
	return (
		<div>
			<Typography token="h3">오프라인 팀 챌린지에 가장 기대하는 점은 무엇인가요?</Typography>
			<br></br>
			<Typography weight={300}>더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.</Typography>
			<br></br><br></br>
			<br></br>
			
			<Button content="start" onClick={() => handleButtonClick(1, '1. 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행')} active={formData.selectedButton === 1} color="basic" maxlength="28" style={{ width: '100%', marginTop: '10px' }}>1. 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행</Button>
			<Button content="start" onClick={() => handleButtonClick(2, '2. 팀원들과 협업을 하는 경험')} active={formData.selectedButton === 2} color="basic" maxlength="28" style={{ width: '100%', marginTop: '10px' }}>2. 팀원들과 협업을 하는 경험</Button>
			<Button content="start" onClick={() => handleButtonClick(3, '3. CTO님의 명강의')} active={formData.selectedButton === 3} color="basic" maxlength="28" style={{ width: '100%', marginTop: '10px' }}>3. CTO님의 명강의</Button>
			<Button content="start"  onClick={() => handleButtonClick(4, '4. 맛있는 점심식사')} active={formData.selectedButton === 4} color="basic" maxlength="28" style={{ width: '100%', marginTop: '10px' }}>4. 맛있는 점심식사</Button>
		</div>
	);
}

export default Modal_3;