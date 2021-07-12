import React, { useState, useEffect, useRef } from 'react'

function RememberForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    // input에 입력한 것
    const handleChange = e => {
        setInput(e.target.value);
    }

    // 폼 제출할 때
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), // id값 랜덤하게 주기
            text: input // text로는 input의 내용
        });

        setInput('');
    };


    return (
        <form className="remember-form" onSubmit={handleSubmit}>
            {props.edit ? ( // 수정이면
                <>
                    <input
                        type="text"
                        placeholder="Update your something"
                        value={input}
                        name="text"
                        className="remember-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="remember-button">Update something!</button>
                </>
            ) : // 그게 아니면(내용 추가일 때는)
                (
                    <>
                        <input
                            type="text"
                            placeholder="Add something to remember"
                            value={input}
                            name="text"
                            className="remember-input edit"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="remember-button edit">Add something!</button>
                    </>
                )}


        </form>
    );
}

export default RememberForm
