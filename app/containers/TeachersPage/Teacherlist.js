import React from 'react';
import Itemwriter from './Teacheritem';

export default function TeachersList({ people }) {
  return (
    <div className="TeacherList">
      <div id="listTitle" className="TeacherItem">
        <div>Фото</div>
        <div>ПІБ</div>
        <div>Короткі відомості</div>
      </div>
      {people.map(person => (
        // var fullname = person.fullName.replace(' ', "\r\n");

        (

          <div className="TeacherItem">
          <img src={person.img} className="portret" />
            <div className="fullName"><div><a href="#">{person.fullName}</a></div></div>
            <div className="info">
              <p>{person.description}</p>
              <p><span className="ItemTitle">Освіта: </span><span>{person.education}</span></p>
              <Itemwriter title="Науковий ступінь і вчене звання: " content={person.scienceDegree} />
              <Itemwriter title="Викладає дисципліни: " content={person.disciplines} />
              <Itemwriter title="Сфера наукової діяльності: " content={person.sphere} />
              <Itemwriter title="Здобутки: " content={person.achievements} />
              <Itemwriter title="contacts" content={person.contacts} id={person.id} />
            </div>
        </div>
      ))}
    </div>
  );
}
