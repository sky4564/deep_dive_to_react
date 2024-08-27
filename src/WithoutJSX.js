import React from 'react';

function WithoutJSX() {
    const name = "React 학습자";
    const items = ["JSX", "컴포넌트", "속성", "상태"];

    return React.createElement(
        'div',
        null,
        React.createElement('h2', null, 'JSX 미사용'),
        React.createElement('p', null, '안녕하세요, ' + name + '님!'),
        React.createElement(
            'ul',
            null,
            items.map((item, index) =>
                React.createElement('li', { key: index }, item)
            )
        )
    );
}

export default WithoutJSX;