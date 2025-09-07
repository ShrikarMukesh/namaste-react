import { useState } from 'react';


function CharacterCount() {

    const [text, setText] = useState("");
    const [maxLength, setMaxLength] = useState(50);

    const charCount = text.length;
    const warningLimit = Math.floor(maxLength * 0.9);
    const overLimit = charCount > maxLength;
    const warning = charCount >= warningLimit;


    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div className="characterCount">
            <h1>Character Count</h1>
            <p>Track your input length with live character warnings.</p>

            <div className="container">
                <div className="inputs">
                    <label>
                        Max length:
                        <input
                            type="number"
                            value = {maxLength}
                            min="0"
                            max="1000"
                            data-testid="maxlength"
                            onChange={
                                (e) => setMaxLength(Number(e.target.value))
                            }
                        />
                    </label>
                </div>
                <textarea
                    className="text"
                    placeholder="Start Typing"
                    onChange={handleChange}
                    value={text}
                    data-testid="textarea"
                ></textarea>

                <div className="char-info" data-testid='char-info'
                >{charCount} / {maxLength}</div>

                <div className="warnings">
                    {warning && !overLimit && (
                        <p className="warning-text" data-testid="warning-text">You are close to the limit!
                        </p>
                    )}
                    {overLimit && (
                        <p className="error-message" data-testid="error-text">
                            {`Limit exceeded by ${charCount - maxLength} characters`}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
export default CharacterCount;
