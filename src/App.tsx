import React, {useEffect, useState} from 'react';

import './App.css';

function App() {
    const [date, setDate] = useState(new Date())

    const convertsToTwoDigitValue = (date: number) => {
        if (date < 10) {
            return '0' + date
        }
        return date
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.pageX / window.innerWidth;
            const y = e.pageY / window.innerHeight;

            const stars = document.querySelector('.stars') as HTMLElement;
            const earth = document.querySelector('.earth') as HTMLElement;

            if (stars) {
                stars.style.transform = `translate(-${x * 30}px, -${y * 30}px)`;
            }

            if (earth) {
                earth.style.transform = `translate(-${x * 60}px, -${y * 60}px)`;
            }
        };

        const intro = document.querySelector('.intro') as HTMLElement;

        if (intro) {
            intro.addEventListener('mousemove', handleMouseMove);
        }

        // Cleanup
        return () => {
            if (intro) {
                intro.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () =>{
            clearInterval(intervalId)
        }
    }, [])


    return (
        <div className='AppWrapper'>
            <section className={'intro'}>
                <div className={'earth'}>earth image</div>
                <div className={'stars'}>stars background</div>
                <div className={'clock'}>
                    <span className={'date'}>{convertsToTwoDigitValue(date.getHours())}</span><span
                    className={'date'}> : </span>
                    <span className={'date'}>{convertsToTwoDigitValue(date.getMinutes())}</span><span
                    className={'date'}> : </span>
                    <span className={'date'}>{convertsToTwoDigitValue(date.getSeconds())}</span>
                </div>
            </section>
        </div>
    );
}

export default App;
