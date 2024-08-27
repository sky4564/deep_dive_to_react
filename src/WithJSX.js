import React from 'react';

function WithJSX() {
    const name = "React 학습자";
    const items = ["JSX", "컴포넌트", "속성", "상태"];

    return (
        <div>
            <h2>JSX 사용</h2>
            <p>안녕하세요, {name}님!</p>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default WithJSX;