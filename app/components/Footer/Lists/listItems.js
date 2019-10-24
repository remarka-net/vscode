import React from 'react';


const about = [{title: 'Історія', link: '/'}, {title: 'Партнери', link: '/'}, {title: 'Контакти', link: '/'}, {title: 'Дошка пошани', link: '/'}, {title:  'Фотогалерея', link: '/'}];
const entrance = [{title: 'Бакалаврат', link: '/'}, {title: 'Магіcтратура', link: '/'}, {title: 'Аcпірантура', link: '/'}, {title: 'Документи', link: '/'}, {title: 'Контакти відбркової комісії інституту', link: '/'}, {title: 'Гуртожитки', link: '/'}];
const departments = [{title: 'Кафедра ТК', link: '/'}, {title: 'Кафедра ТС', link: '/'}, {title: 'Кафедра ІТМ', link: '/'}];
const scientificWork = [{title: 'Науково-технічні розробки', link: '/'}, {title: 'Наші видання', link: '/'}, {title: 'Підготовка наукових кадрів', link: '/'}, {title: 'Участь студентів у НДР', link: '/'}, {title: 'Участь у конференціях', link: '/'}, {title: 'Магістерські роботи', link: '/'}, {title: 'Захищені дисертації', link: '/'}, {title: 'Про НДЦ МД', link: '/'}];
const studing = [{title: 'Бакалавр', link: '/'}, {title: 'Магістратура', link: '/'}, {title: 'Доктор філософії', link: '/'}, {title: 'Перелік предметів', link: '/'}, {title: 'Навчальні плани', link: '/'}, {title: 'Робота над дипломом', link: '/'}, {title: 'Архів дипломних робіт', link: '/'}, {title: 'Подвійний диплом', link: '/'}, {title: 'Післядипломна освіта', link: '/'}, {title: 'Гуртки', link: '/'}];
const deansOffice = [{title: 'Інформація', link: '/'}, {title: 'Структура', link: '/'}, {title: 'Академічні групи', link: '/'}, {title: 'Питання замдекану', link: '/'}, {title: 'Досягнення студентів', link: '/'}, {title: 'Інформація для студентів денної форми навчання', link: '/'}, {title: 'Інформація для студентів заочної форми навчання', link: '/'}];
const academicCouncil = [{title: 'Склад вченої ради', link: '/'}, {title: 'План роботи', link: '/'}, {title: 'Рішення вченої ради', link: '/'}, {title: 'Наукові новини', link: '/'}];
const usefulLinks = [{title: 'Новини', link: '/'}, {title: 'НДІ ТК', link: '/'}, {title: 'Контакти', link: '/'}, {title: 'Журнал', link: '/'}, {title: 'Конференції', link: '/'}, {title: 'Робота для студентів', link: '/'}, {title: 'Випускники', link: '/'}, {title: 'Міжнародні компанії', link: '/'}, {title: 'Спільні центри', link: '/'}];


export default function TodoItems({topic}){


    const name = topic.toString();
    let listItems;


    switch(name){
        case 'about':
            listItems = about.map(listItem => <a href={listItem.link} className="listLink"><li>{listItem.title}</li></a>);
            break;

        case 'entrance':
            listItems = entrance.map(listItem => <a href={listItem.link} className="listLink"><li>{listItem.title}</li></a>);
            break;

        case 'departments':
            listItems = departments.map(listItem => <a href={listItem.link} className="listLink"><li>{listItem.title}</li></a>);
            break;

        case 'scientificWork':
            listItems = scientificWork.map(listItem => <a href={listItem.link} className="listLink"><li>{listItem.title}</li></a>);
            break;

        case 'studing':
            listItems = studing.map(listItem => <a href={listItem.link} className="listLink"><li>{listItem.title}</li></a>);
            break;

        case 'deansOffice':
            listItems = deansOffice.map(listItem => <a href={listItem.link} className="listLink"><li>{listItem.title}</li></a>);
            break;

        case 'academicCouncil':
            listItems = academicCouncil.map(listItem => <a href={listItem.link} className="listLink"><li>{listItem.title}</li></a>);
            break;

        case 'usefulLinks':
            listItems = usefulLinks.map(listItem => <a href={listItem.link} className="listLink"><li>{listItem.title}</li></a>);
            break;
    }
    return(
        <ul>{listItems}</ul>
    );
}