import React, { useState } from 'react';
import Remember from './Remember';
import RememberForm from './RememberForm';

function RememberList() {
    const [somethings, setSomethings] = useState([]);

    // 기억할 내용 추가
    const addSomething = something => {
        if (!something.text || /^\s*$/.test(something.text)) {
            return;
        };

        const newSomething = [something, ...somethings]; // something, ...somethings를 해야 역순으로 바로 집어 넣어짐.
        setSomethings(newSomething);
    };

    // 완료 처리
    const completeSomething = id => {
        let updatedSomethings = somethings.map(something => {
            if (something.id === id) {
                something.isComplete = !something.isComplete
            }
            return something;
        });
        setSomethings(updatedSomethings);
    };

    // 업데이트
    const updateSomething = (somethingId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setSomethings(prev => prev.map(item => (item.id === somethingId ? newValue : item)));
    };

    // 지우기
    const removeSomething = id => {
        const removeArr = [...somethings].filter(something => something.id !== id);
        setSomethings(removeArr);
    };



    return (
        <div>
            <h1>What's your 'something'?</h1>
            <RememberForm onSubmit={addSomething}></RememberForm>
            <Remember
                somethings={somethings}
                completeSomething={completeSomething}
                removeSomething={removeSomething}
                updateSomething={updateSomething}
            ></Remember>
        </div>
    )
}

export default RememberList
