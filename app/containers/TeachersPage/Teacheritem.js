import React from 'react';

export default function Itemwriter({ title, content, id }) {
  if(content != ""){
    if(title == "contacts"){
      if(id == 1){
        return(
          <p><span className="ItemTitle">Електронна пошта: </span><a href={content}>{content}</a></p>
        )
      }
      return(
        <p><span className="ItemTitle">Інформація на порталі Intellect: </span><a href={content}>{content}</a></p>
      )
      );
    }
    return(
      <p><span className="ItemTitle">{title}</span><span>{content}</span></p>
    )
    );
  }
  return null;
}
