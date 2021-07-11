import React, { useState } from 'react';
import RememberForm from './RememberForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Remember({ somethings, completeSomething, removeSomething, updateSomething }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateSomething(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <RememberForm edit={edit} onSubmit={submitUpdate} />;
    }


    return somethings.map((something, index) => (
        <div
            className={something.isComplete ? 'something-row complete' : 'something-row'}
            key={index}
        >

            <div
                key={something.id}
                onClick={() => completeSomething(something.id)}>
                {something.text}
            </div>

            <div className="icons">
                <RiCloseCircleLine // 지우는 버튼
                    onClick={() => removeSomething(something.id)}
                    className='delete-icon' />
                <TiEdit // 업데이트 하는 버튼
                    onClick={() => setEdit({ id: something.id, value: something.text })}
                    className='edit-icon'
                />
            </div>

        </div>


    ));
}

export default Remember
