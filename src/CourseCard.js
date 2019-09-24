import React from 'react';

export default class CourseCard extends React.Component {
    render() {
        return (
            <a href={this.props.course.course_link}>
                <div className="course_card" onClick="CourseClick(event)"
                     onMouseOver="CourseMouseOver(event)" onMouseOut="CourseMouseOut(event)">
                    <div className="course_card__name">{this.props.course.course_name}</div>
                    <div className="course_card__date_box">
                        Начало: <span className="course_card__date_text">{this.props.course.start_date}</span>.
                    </div>
                </div>
            </a>
        );
    }
}
