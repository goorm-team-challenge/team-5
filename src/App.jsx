import { EmptyView, Header } from '@/components';

import styles from './App.module.scss';
import ContentView from './components/ContentView.jsx/ContentView';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<main className={styles.main}>
				{
					localStorage.length != 0?
					<ContentView/>
					:
					<EmptyView />
				}
			</main>
		</div>
	);
}

export default App;
