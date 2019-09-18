import React, { memo } from 'react';
import classes from '../styles/Suggestions.module.css';

export default memo(function Suggestions({ suggestions, handleSubmit }) {
	if (suggestions.length === 0) return null;
	return (
		<div className={classes.suggestionContainer}>
			{suggestions.map((suggesstion, i) => (
				<div
					key={suggesstion + i}
					className={classes.suggestion}
					onClick={() => handleSubmit(suggesstion)}
				>
					<p className={classes.suggestionMessage}>{suggesstion}</p>
				</div>
			))}
		</div>
	);
});
