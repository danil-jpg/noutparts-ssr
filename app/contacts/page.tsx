import Breadcrumbs from '../common/components/breadcrumbs/Breadcrumbs';
import { Breadcrumb } from '../common/types/types';
import IconRenderer from '../common/ui/Icons/IconRenderer';
import './contacts.scss';
import { ContactsForm } from '../common/components/ContactForms/ContactForms';

export default function Contacts() {
    const breadcrumbs: Breadcrumb[] = [
        {
            href: '/contacts',
            label: 'Контакты',
            active: true,
        },
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} classname='container  contacts__breadcrumbs' />
            <div className='contacts'>
                <div className='container'>
                    <div className='contacts__row'>
                        <p className='contacts__title'>Контакты</p>
                        <p className='contacts__text'>У вас остались вопросы? Пожалуйста оставьте свои данные и мы свяжемся с вами!</p>
                        <div className='contacts__body'>
                            <ul className='info-contacts'>
                                <li className='info-contacts__item'>
                                    <p className='info-contacts__item-title'>
                                        <IconRenderer id='point-icon' />
                                        Адрес:
                                    </p>
                                    <p className='info-contacts__item-value'>Город, ул. 12, д.1</p>
                                </li>
                                <li className='info-contacts__item'>
                                    <p className='info-contacts__item-title'>
                                        <IconRenderer id='phone-icon' />
                                        Телефон:
                                    </p>
                                    <a href='tel:066 388-88 95' className='info-contacts__item-value info-contacts__item-value_link'>
                                        (066) 388-88 95
                                    </a>
                                </li>
                                <li className='info-contacts__item'>
                                    <p className='info-contacts__item-title'>
                                        <IconRenderer id='clock-icon' />
                                        Мы работаем:
                                    </p>
                                    <div className='info-contacts__item-value'>
                                        Пн-Пт 10:00 - 19:00
                                        <br /> Сб-Вс 10:00 - 18:00
                                    </div>
                                </li>
                                <li className='info-contacts__item'>
                                    <p className='info-contacts__item-title'>
                                        <IconRenderer id='mail-icon' />
                                        E-mail:
                                    </p>
                                    <a href={`mailto:shop@gmail.com`} className='info-contacts__item-value  info-contacts__item-value_link'>
                                        shop@gmail.com
                                    </a>
                                </li>
                            </ul>
                            <ContactsForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
