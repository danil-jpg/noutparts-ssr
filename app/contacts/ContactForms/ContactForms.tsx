'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import './ContactsForms.scss';
// import PrimaryInput from '@/app/common/ui/inputs/PrimaryInput';
import PrimaryInput from '@/app/common/ui/PrimaryInputs/PrimaryPrimaryInput';
// import PrimaryTextArea
// import { Textarea } from '../../../ui/forms/Textarea/Textarea'

type PrimaryInputForm = {
    name: string;
    email: string;
    tel: number;
    comment: string;
};

export function ContactsForm() {
    // const { PrimaryInputComment, PrimaryInputEmail, PrimaryInputName, PrimaryInputTel } = useAppSelector(
    // 	state => state.contacts
    // )

    // const {
    // 	register,
    // 	handleSubmit,
    // 	reset,
    // 	setError,
    // 	formState: { errors, isValid },
    // } = useForm<PrimaryInputForm>()

    const onSubmit: SubmitHandler<PrimaryInputForm> = (data) => {
        // console.log(JSON.stringify({ data: { ...data } }))
        // fetch(`${API}/feedbacks`, {
        // 	method: 'POST',
        // 	body: JSON.stringify({ data: data }),
        // 	headers: {
        // 		'Content-Type': 'application/json',
        // 	},
        // })
        // 	.then(res => {
        // 		reset()
        // 	})
        // 	.catch((error: Error) => {
        // 		console.log(error.message)
        // 	})
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='contacts-form'>
            <div className='contacts-form__body'>
                <PrimaryInput
                    title={PrimaryInputName.title}
                    placeholder={PrimaryInputName.placeholder}
                    register={register('name', {
                        required: PrimaryInputName.requiredMess,
                    })}
                    required
                    error={errors?.name && errors?.name?.message}
                />
                <PrimaryInput
                    title={PrimaryInputEmail.title}
                    placeholder={PrimaryInputEmail.placeholder}
                    register={register('email', {
                        required: PrimaryInputEmail.requiredMess,
                    })}
                    error={errors.email ? errors.email.message : ''}
                    required
                />
                <PrimaryInput
                    title={PrimaryInputTel.title}
                    placeholder={PrimaryInputTel.placeholder}
                    register={register('tel')}
                    error={errors.email ? errors.email.message : ''}
                    type='tel'
                />
                <Textarea
                    title={PrimaryInputComment.title}
                    placeholder={PrimaryInputComment.placeholder}
                    register={register('comment', {
                        required: PrimaryInputComment.requiredMess,
                    })}
                    error={errors.comment && errors.comment.message}
                    required
                    className='contacts-form__comment'
                />
            </div>
            <Button type='submit' className='contacts-form__btn'>
                Отправить
            </Button>
        </form>
    );
}
