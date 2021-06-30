import React from 'react';

class Emoji extends React.Component{
    addEmoji (text,emo){
        return `${emo} ${text} ${emo}`
    }
    render (){
        return (<div>
            <p>{this.addEmoji('I am JavaScript','😇')}</p>
        </div>)
    }
}

export default Emoji;