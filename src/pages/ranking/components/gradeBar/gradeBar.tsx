import React, { FC } from 'react';
import './gradeBar.scss';

type Grade = {
    title: string;
    value: number;
}

type Props = {
    type? : 'column' | 'row';
}
const GradeBar:FC<Props>  = ({ type = 'column' }) => {

    const tempGrade: Grade[] = [
        { title: 'A', value: 0.6 },
        { title: 'B', value: 0.2 },
        { title: 'C', value: 0.2 }
    ]

    return (
        <div className='grade-bar-root'>
            { type === 'column' && (
                <div className='grade-column'>
                    {
                        tempGrade.map(({title, value}) => (
                            <div className={`item ${title}`} key={title} style={{ width: `${value * 100}%`}} />
                        ))
                    }
                </div>
            )}
            { type === 'row' && (
                <div className='grade-row'>
                    {
                        tempGrade.map(({title, value}) => (
                            <div key={title} className='row'>
                                <div className={`item ${title}`} style={{ width: `${value * 100}%`}}/>
                                <div className='item other'/>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )

};

export default React.memo(GradeBar);