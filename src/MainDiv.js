import React from 'react';
import CourseCard from "./CourseCard";

export default class MainDiv extends React.Component {
    render() {
        const cards = this.props.courses.map((course) => {return <CourseCard course={course}/>})
        return (
            <div className="main">
                {cards}
            </div>
        );
    }
}
