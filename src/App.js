import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

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
			)}
		</>
	);
};

const App = () => {
	return <Steps />;
};
export default App;
