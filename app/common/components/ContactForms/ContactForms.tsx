'use client';
import './contactsForms.scss';
import PrimaryInput from '../../ui/inputs/PrimaryInput';
import { useState } from 'react';
import TextAreaInput from '../../ui/inputs/TextAreaInput';
import { postAppeal } from '@/app/lib/data';
import PrimaryBtn from '../../ui/buttons/primary/PrimaryBtn';
import Loading from '../Loading/Loading';

export function ContactsForm() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [tel, setTel] = useState<string>('');
    const [appeal, setAppeal] = useState<string>('');

    const [loading, setloading] = useState(false);
    const [isSend, setIsSend] = useState(false);

    const onSubmit = () => {
        if (name && tel) {
            setloading(true);
            async function addAppeal() {
                await postAppeal({
                    data: {
                        name,
                        tel,
                        email,
                        appeal,
                    },
                });
            }
            addAppeal();

            setTimeout(() => {
                setloading(false);
                setName('');
                setEmail('');
                setTel('');
                setAppeal('');
                setIsSend(true);
                alert('Ваше сообщение успешно отправлено');
            }, 1000);
        }
        if (isSend) {
            alert('Сообщение уже отправлено');
        }
    };

    return (
        <form action={onSubmit} className='contacts-form' name='contact-form'>
            <div className='contacts-form__body'>
                <PrimaryInput type='text' setValue={setName} placeholder='Имя' label='  Ваше имя ' />
                <PrimaryInput type='email' setValue={setEmail} placeholder='Email' label=' Ваш email (необязательно) ' />
                <PrimaryInput type='tel' setValue={setTel} placeholder='Телефон' label=' Ваш номер телефона' />
                <TextAreaInput label='Что вас интересует? ' setValue={setAppeal} classname='contacts-form__appeal' />
            </div>
            <PrimaryBtn type='default' text='Отправить' htmlType='submit' className='contacts-form__btn'></PrimaryBtn>
            {loading ? <Loading></Loading> : ''}
        </form>
    );
}
