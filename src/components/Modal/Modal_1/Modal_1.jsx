import { useState } from 'react';
import { Button, Typography, Label, Input} from '@goorm-dev/gds-challenge';

function Modal_1({ formData, setFormData }) {
	
	
  const handleInputChange = (e) => {
    const { name, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: !formData[name] });
    } else {
      const { value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };
		
	return (
		<div>
			<Typography token="h3">참여자 정보를 입력해주세요.</Typography>
			<br></br>
			<Typography weight={300}>오프라인 팀 챌린지 참여자의 정보를 수집하려고 해요.</Typography>
			<br></br><br></br>
			<br></br>
			
			<Label required> 이름</Label>
			<Input size="lg" type="text" name="name" value={formData.name} onChange={handleInputChange} />
     		<Label required>전화번호</Label>
    		<Input size="lg" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
      		<Label required>이메일</Label>
    		<Input size="lg" type="email" name="email" value={formData.email} onChange={handleInputChange} />
     	
			<br></br><br></br>
			<Input size="lg" label="전체동의" type="checkbox" name="isAll" checked={formData.isAll} onChange={handleInputChange} ></Input>
			
			<Input size="lg" label="(필수) 개인정보처리방침" type="checkbox" name="isPersonal"  checked={formData.isPersonal} onChange={handleInputChange}></Input>
			<Input size="lg" label="(선택) 마케팅 목적의 개인 정보 수집 및 이용" type="checkbox" name="isMarketing" checked={formData.isMarketing} onChange={handleInputChange}></Input>
			<Input size="lg" label="(선택) 광고성 정보 수신" type="checkbox" name="isAd" checked={formData.isAd} onChange={handleInputChange}></Input>
			
			<Input size="lg" label="이메일" type="checkbox" name="isEmail" checked={formData.isEmail} onChange={handleInputChange}></Input>
			<Input size="lg" label="SMS" type="checkbox" name="isSMS" checked={formData.isSMS} onChange={handleInputChange}></Input>
			
			<Typography color="secondary" token="paragraph-sm">* 광고성 정보 수신에 동의하시면 챌린지에 꾸준히 참여하실 수 있도록 리마인드 알림을 보내드려요.</Typography>
			
		</div>
	);
}

export default Modal_1;