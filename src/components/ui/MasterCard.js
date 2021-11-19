import React from 'react'

const MasterCard = (props) => {
    const { title, content} = props;
    return (
        <div className="master-card">
            <h3 className="title text-center">{title}</h3>
            <p className="content">{content}</p>
        </div>
    )
}

export default MasterCard
