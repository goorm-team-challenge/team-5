import { Typography, TextArea} from '@goorm-dev/gds-challenge';

// TODO 

// 값이 바뀔 때, 부모 컴포넌트의 함수를 호출하고 있습니다.
// 이에 대한 처리를 안하면 error 발생!

function Modal_4({ question4, onQuestion4Change }) {
	const handleTextAreaChange = (e) => {
		const newValue = e.target.value;
		onQuestion4Change(newValue); // 입력값을 부모 컴포넌트로 전달
	};
	
	return (
		<div>
			<Typography token="h3">구름톤 챌린지에 전하고 싶은 말을 적어주세요.</Typography>
			<br></br>
			<Typography weight={300}>더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.</Typography>
			<br></br><br></br>
			<br></br>
			
			<TextArea rows={4} style={{ width: '100%', marginTop: '10px' }} placeHolder="ex.&#13;&#10;다음 번 챌린지에서는 더 어려운 문제가 출제되면 좋겠어요.&#13;&#10;오프라인 과제가 다양했으면 좋겠어요." value={question4} onChange={handleTextAreaChange}></TextArea>
		</div>
	);
}

export default Modal_4;