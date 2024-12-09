import React from 'react'

class InputElement extends React.Component {
	render() {
		return(
			<input 
				type={this.props.inputType}
				placeholder={this.props.inputPlaceholder}
				className={this.props.inputClass}
				onBlur={this.props.onBlurHandler}
				onClick={this.props.onClickHandler}
			/>
		)
	}
}

export default InputElement;