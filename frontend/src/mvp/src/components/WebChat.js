import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import '../css/WebChat.css';

const WebChat = (props) => {
    React.useEffect(() => {
        addResponseMessage('Fala investidor(a), em que posso te ajudar?');
    }, []);
    const manipularNovaMenssagem = (novaMensagem) => {
        console.log(`New message incoming! ${novaMensagem}`);
        // Now send the message throught the backend API
        addResponseMessage()
    }
    return (
        <div >
            <Widget
                handleNewUserMessage={manipularNovaMenssagem}
                title={props.nome}
                subtitle="Bem-vindo(a)"
                senderPlaceHolder="Digite sua mensagem..."
            />
        </div>
    );
}

export default WebChat;