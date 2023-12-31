import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

const Button = ({ onClick, isDisabled, children }) => {
	return (
		<button onClick={onClick} disabled={isDisabled}>
			{children}
		</button>
	);
};

const StepsMessage = ({ step, children }) => {
	return (
		<p className='message'>
			<h3>Step {step}:</h3>
			{children}
		</p>
	);
};

const Steps = () => {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	const handlePrev = () => {
		if (step > 1) {
			setStep((s) => s - 1);
		}
	};

	const handleNext = () => {
		if (step < 3) {
			setStep((s) => s + 1);
		}
	};

	const disabledPrev = step === 1;
	const disabledNext = step === 3;

	return (
		<>
			<button className='close' onClick={() => setIsOpen((is) => !is)}>
				&times;
			</button>
			{isOpen && (
				<div className='steps'>
					<div className='numbers'>
						<div className={step >= 1 ? 'active' : ''}>1</div>
						<div className={step >= 2 ? 'active' : ''}>2</div>
						<div className={step >= 3 ? 'active' : ''}>3</div>
					</div>

					<StepsMessage step={step}>{messages[step - 1]}</StepsMessage>

					<div className='buttons'>
						<Button onClick={handlePrev} isDisabled={disabledPrev}>
							{!disabledPrev && <span>👈</span>} Previous
						</Button>
						<Button onClick={handleNext} isDisabled={disabledNext}>
							Next {!disabledNext && <span>👉</span>}
						</Button>
					</div>
				</div>
			)}
		</>
	);
};

const App = () => {
	return <Steps />;
};
export default App;
