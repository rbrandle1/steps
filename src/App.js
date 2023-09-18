import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

const App = () => {
	const [step, setStep] = useState(1);

	const handlePrev = () => {
		if (step > 1) {
			setStep(step - 1);
		}
	};

	const handleNext = () => {
		if (step < 3) {
			setStep(step + 1);
		}
	};

	return (
		<div className='steps'>
			<div className='numbers'>
				<div className={step >= 1 ? 'active' : ''}>1</div>
				<div className={step >= 2 ? 'active' : ''}>2</div>
				<div className={step >= 3 ? 'active' : ''}>3</div>
			</div>

			<p className='message'>
				Step {step}: {messages[step - 1]}
			</p>

			<div className='buttons'>
				<button onClick={handlePrev} disabled={step === 1}>
					Previous
				</button>
				<button onClick={handleNext} disabled={step === 3}>
					Next
				</button>
			</div>
		</div>
	);
};
export default App;
