import React from 'react';
import ExperienceBullet from '../ExperienceBullet';
import './style.css';
import '../app.css';

const Experience = (props) => (
  
      <div className="experience-box box-border d-inline-block">
        <p className="experience-title">{props.company} - {props.date}</p>
        <p className="experience-role">{props.role}</p>
        <ul className="experience-list">
        {props.bullets.map(bullet => (
          <ExperienceBullet key={bullet.id} bulletText={bullet['bullet-text']} />
        ))}  
        </ul>
      </div>   
    )

export default Experience;