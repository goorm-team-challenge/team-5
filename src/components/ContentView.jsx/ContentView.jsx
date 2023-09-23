import cn from 'classnames';

import { Card } from '@/components';

import { Typography } from '@goorm-dev/gds-challenge';

// import styles from '../EmptyView/EmptyView.module.scss';
import { useEffect, useState } from 'react';

const ContentView = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
      for (let i = window.localStorage.length-1; i >= 0; i++) {
        const key = window.localStorage.key(i);
        const value = window.localStorage.getItem(key);
        setItems((prevItems) => [...prevItems, value]);
        // console.log(i, key, value, items);
      }
    }, []);

    console.log(items);

	return (
		<Card center padding="none"  children={items}>
			{
                <>

                <div style={{padding: '10px'}}>
                <Typography>참여한 응답자</Typography> <Typography  color="secondary">{localStorage.length}</Typography>
                </div>
                <hr></hr>
                <div style={{overflow:'auto', maxHeight:'720px'}}>
                {
                    items.map((item, index)=>(
                        <>
                        {index !== 0 ? <hr></hr> : <div style={{height:'12px'}}></div>}
                        <div key={index}>
                            참여자 {index}. {item}
                        </div>
                        </>
                    ))

                }
                </div>
				<Typography color="hint" token="paragraph-sm">
				</Typography>
				</>
			}
		</Card>
	);
};

export default ContentView;
