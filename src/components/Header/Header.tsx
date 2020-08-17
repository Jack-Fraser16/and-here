import React, { FC } from 'react';
import useStyles from './styles';

const Header: FC = () => {

	const styles = useStyles();

	return(
		<header className={styles.header}>
			<div className={styles.title}>and here.</div>
			<div className={styles.subtitle}> CENTERING SURVIVORS </div>
		</header> 
	);
}

export default Header;