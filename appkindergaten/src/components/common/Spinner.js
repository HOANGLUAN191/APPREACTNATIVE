import React from 'C:/Users/hoang/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={size || 'large'} />
		</View>
	);
};

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export { Spinner };
