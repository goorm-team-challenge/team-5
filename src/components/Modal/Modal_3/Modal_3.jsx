import { Typography, Input} from '@goorm-dev/gds-challenge';

function Modal_3() {
	return (
		<div>
			<Typography token="h3">오프라인 팀 챌린지에 가장 기대하는 점은 무엇인가요?</Typography>
			<br></br>
			<Typography weight={300}>더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.</Typography>
			<br></br><br></br>
			<br></br>
			
			<Input type="text" maxlength="28" style={{ width: '100%', marginTop: '10px' }} placeholder="1. (예시) 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행"></Input>
			<Input type="text" maxlength="28" style={{ width: '100%', marginTop: '10px' }} placeholder="2."></Input>
			<Input type="text" maxlength="28" style={{ width: '100%', marginTop: '10px' }} placeholder="3."></Input>
			<Input type="text" maxlength="28" style={{ width: '100%', marginTop: '10px' }} placeholder="4."></Input>
		</div>
	);
}

export default Modal_3;