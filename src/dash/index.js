import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../services/api';
import './styles.css';

function EnvioMensagem() {
    const [formMsg, setFormMsg] = useState({ numero: '', mensagem: '' });

    function onChange(evt) {
        const value = evt.target.value;
        const key = evt.target.name;

        setFormMsg(old => ({
            ...old,
            [key]: value
        }));
    }

    async function handleMsg(evt) {
        evt.preventDefault();

        try {
            const response = await api.post('/env', {
                id: formMsg.numero,
                message: formMsg.mensagem
            });

        } catch (error) {
            return
        }
    }

    return (
        <div className='screen'>
            <form className='form-mensagem' onSubmit={handleMsg}>
                <h2>Mensagem valendo pizza</h2>
                <div className='group-form'>
                    <label className='form-mensagem__label'>Numero</label>
                    <input id='numero' placeHolder='' label="teste" className='input_numero' type='text' name='numero' value={formMsg.numero} onChange={onChange} />
                </div>

                <div className='group-form'>
                    <label className='form-mensagem__label'>Mesagem</label>
                    <input id='mensagem' placeHolder='Insira sua mensagem' className='input_mensagem' type='text' name='mensagem' value={formMsg.mensagem} onChange={onChange} />
                </div>
                <button className='form-mensagem__btn' type='submit' onClick={handleMsg}>Enviar Mensagem</button>
            </form>
        </div>
    );

}
export default EnvioMensagem;