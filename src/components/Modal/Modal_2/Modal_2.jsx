import { Typography, Label, Form, Button} from '@goorm-dev/gds-challenge';

// TODO

// 1. Props 로 SW전공과 구름 서비스 사용 유무 저장
// 2. Button 클릭 시 하나만 클릭되게 처리

function Modal_2() {
	return (
		<div>
			<Typography token="h3">구름 서비스 이용 경험을 알려주세요.</Typography>
			<br></br>
			<Typography weight={300}>더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.</Typography>
			<br></br><br></br>
			<br></br>
			
			<Label required> 1. SW 관련 학과를 전공하셨나요?</Label>
			<Form.Group gap="md" >
				<div>
					<Button size="lg" color="basic" content="center" >전공</Button>
					<Button size="lg" color="basic" content="center" >비전공</Button>
				</div>
			</Form.Group>
			<br></br>
			<Label required> 2. 구름 서비스를 사용해보신 적이 있나요?</Label>
			<Form.Group gap="md" >
				<div>
					<Button size="lg" color="basic" content="center" >예</Button>
					<Button size="lg" color="basic" content="center" >아니오</Button>
				</div>
			</Form.Group>
			
			
		</div>
	);
}

export default Modal_2;