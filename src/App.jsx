import React, { useState } from 'react';
import { EmptyView, Header, CustomModal } from '@/components';
import styles from './App.module.scss';

function App() {
	
	const [isOpen, setIsOpen] = useState(false);
	
	const toggle = () => {
   		setIsOpen(!isOpen);
  	};
	
	return (
		<div className={styles.App}>
			<Header toggleModal={toggle}/>
			<main className={styles.main}>
				<CustomModal isOpen={isOpen} toggle={toggle}/>
				<EmptyView  />
			</main>
		</div>
	);
}

export default App;
