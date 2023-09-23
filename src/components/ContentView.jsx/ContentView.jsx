import cn from 'classnames';

import { Card } from '@/components';

import { Typography, Collapse} from '@goorm-dev/gds-challenge';

// import styles from '../EmptyView/EmptyView.module.scss';
import { useEffect, useState } from 'react';

const ContentView = () => {
    const [items, setItems] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    
    const toggle = () => {
        setIsClicked((current) => !current)
    }
    
  const [openCollapseIndex, setOpenCollapseIndex] = useState(-1);

  const toggleCollapse = (index) => {
    if (index === openCollapseIndex) {
      // Clicked on the already open Collapse, close it
      setOpenCollapseIndex(-1);
    } else {
      setOpenCollapseIndex(index);
    }
  };

    console.log(items);

    const dummy = [
        {
            key: '1',
            name: '이해연',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        {
            key: '2',
            name: '이해준',
            phoneNumber: '010-9227-5669',
            email: 'seahaeyeon@naver.com',
            question1: '1번답',
            question2: '2번답',
            question2_1: '2_1답',
            question2_2: '2_2답',
            question3: '3답',
            question4: '4답'
        },
        
    ];
    
    // useEffect(() => {
    //   for (let i = dummy.length - 1; i >= 0; i--) {
    //     setItems((current) => [...current, dummy[i]]);
    //   }
    // }, []);
    // alert(items)
    
	return (
        <>
		<Card center padding="md">
            <Typography>참여한 응답자</Typography> <Typography  color="secondary">{localStorage.length}</Typography>
		</Card>
        <div style={{ overflow: 'auto', maxHeight: '720px' }}>
        {
            dummy.slice().reverse().map((item, index) => (
                <>
                    <div style={{padding: '1rem 1.5rem', width: '100%',  border: '1px solid var(--gray-300)', lineHeight: '22px'}} key={index} onClick={() => toggleCollapse(index)}>
                      {dummy.length - index} {item.name}
                    </div>
                    <Collapse isOpen={index === openCollapseIndex}>
                        <Card center type='content' padding="none"  children={items}>
                            1
                        </Card>
                        <Card center type='content' padding="none"  children={items}>
                            1
                        </Card>
                     </Collapse>
                </>
            ))
        }
        </div>
        </>
	);
};

export default ContentView;
