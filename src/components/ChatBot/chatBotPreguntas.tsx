import ChatBot from 'react-simple-chatbot';

const ChatBotModel = () => {
    return (
        <ChatBot
            steps={[
                {
                    id: '1',
                    message: '¿Como te podemos ayudar?',
                    trigger: '2',
                },
                {
                    id: '2',
                    options: [
                        { value: 1, label: 'Servicio al Cliente', trigger: '3' },
                        { value: 2, label: 'Contactar a uno de nuestros trabajadores.', trigger: '4' },
                        { value: 3, label: 'Paquetes de Internet', trigger: '5' },
                    ],
                },
                {
                    id: '3',                    
                    options:[
                        {value: 1, label: 'Consulta de Telefonía/Movil',trigger: '6'},
                        {value: 2, label: 'Consulta de nuestro paquete de Internet 5G',trigger: '7'},
                        {value: 3, label: 'Contactar a uno de nuestros Trabajadores', trigger: '4'},
                    ],
                },
                {
                    id: '4',
                    message: 'Llamanos al numero +1(864)754-5143',
                    end: true,
                },
                {
                    id: '5',                    
                    options:[
                        {value: 1, label: 'Familiar',trigger: '8'},
                        {value: 2, label: 'Empresarial',trigger: '9'},
                        {value: 3, label: 'Estudiantil', trigger: '10'},
                    ],
                },
                {
                    id: '6',
                    message: 'Llamanos al numero para Telefonía/Movil #169*',                                     
                    end: true,
                },
                {
                    id: '7',
                    message: 'Llamanos al numero para paquete Familiar #122*',
                    end: true,
                },

                {
                    id: '8',
                    message: 'Llamanos al numero para paquete Empresarial #123*',
                    end:true,
                },
                {
                    id: '9',
                    message: 'Llamanos al numero para paquete Estudiantil #124*',
                    end:true,
                },
                {
                    id: '10',
                    message: 'Llamanos al numero para paquete 5g #170*',
                    end:true,
                },

            ]}
            floating={true}
        />
    );
};

export default ChatBotModel;
