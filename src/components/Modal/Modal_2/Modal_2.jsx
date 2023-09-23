import { Typography, Label, Form, Button, Input, TextArea} from '@goorm-dev/gds-challenge';
import React, { useState } from 'react';
// TODO

// 1. Props 로 SW전공과 구름 서비스 사용 유무 저장
// 2. Button 클릭 시 하나만 클릭되게 처리



function Modal_2() {
	// SW 관련 학과 버튼 클릭 상태를 저장하는 상태
	const [isMajor, setIsMajor] = useState(false);

	// 구름 서비스 사용 여부 버튼 클릭 상태를 저장하는 상태
	const [hasUsedGoorm, setHasUsedGoorm] = useState(false);

	// 버튼 클릭 이벤트 핸들러
	const handleButtonClick = (type) => {
	if (type === 'major') {
	  setIsMajor(true);
	} else if (type === 'non-major') {
	  setIsMajor(false);
	} else if (type === 'used-goorm') {
	  setHasUsedGoorm(true);
	} else if (type === 'not-used-goorm') {
	  setHasUsedGoorm(false);
	}
	};
	
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
					<Button
						style={{ width: '50%', marginTop: '10px' }}
						size="lg"
						color={isMajor ? 'primary' : 'basic'}
						content="center"
						onClick={() => handleButtonClick('major')}
					>
					전공
					</Button>
					<Button
						style={{ width: '50%', marginTop: '10px' }}
						size="lg"
						color={isMajor ? 'basic' : 'primary'}
						content="center"
						onClick={() => handleButtonClick('non-major')}
					>
					비전공
					</Button>
				</div>
			</Form.Group>
			<br></br>
			<Label required> 2. 구름 서비스를 사용해보신 적이 있나요?</Label>
			<Form.Group gap="md" >
				<div>
					<Button
						
						style={{ width: '50%', marginTop: '10px' }}
						size="lg"
						color={hasUsedGoorm ? 'primary' : 'basic'}
						content="center"
						onClick={() => handleButtonClick('used-goorm')}
					>
					예
					</Button>
					<Button
						style={{ width: '50%', marginTop: '10px' }}
						size="lg"
						color={hasUsedGoorm ? 'basic' : 'primary'}
						content="center"
						onClick={() => handleButtonClick('not-used-goorm')}
					>
					아니오
					</Button>
				</div>
			</Form.Group>
			
			{hasUsedGoorm && (
			<>
			<Label style={{ marginTop: '40px' }}>2-1. 사용 경험이 있는 서비스를 선택해주세요. (복수 선택 가능)</Label>
			<Input size="lg" label="구름EDU" type="checkbox"></Input>
			<Input size="lg" label="구름LEVEL" type="checkbox"></Input>
			<Input size="lg" label="구름DEVTH" type="checkbox"></Input>
			<Input size="lg" label="구름IDE" type="checkbox"></Input>
			<Input size="lg" label="구름EXP" type="checkbox"></Input>
			
			<Label style={{ marginTop: '10px' }}>2-2. 해당 서비스를 사용하게 된 이유는 무엇인가요?</Label>
			<TextArea rows={4} style={{ width: '100%', marginTop: '10px' }} placeHolder="ex. 구름톤 챌린지에 참여하기 위해 레벨 서비스를 사용해봤습니다."></TextArea>
			</>
				)}
			
		</div>
	);
}

export default Modal_2;