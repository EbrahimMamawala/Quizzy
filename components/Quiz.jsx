"use client";

import { useState, useRef, useEffect} from 'react';

const Quiz = () => {

    const data = [

        {
            question: "Which device is required for the Internet connection?",
            option1: "Modem",
            option2: "Router",
            option3: "LAN Cable",
            option4: "Pen Drive",
            ans: 1,
        },
        {
            question: "Which continent has the highest number of countries?",
            option1: "Asia",
            option2: "Europe",
            option3: "North America",
            option4: "Africa",
            ans: 4,
        },
        {
            question: "Junk e-mail is also called?",
            option1: "Spam",
            option2: "Fake",
            option3: "Archived",
            option4: "Bin",
            ans: 1,
        },
        {
            question: "A computer cannot BOOT if it does not have the?",
            option1: "Application Software",
            option2: "Internet",
            option3: "Operating System",
            option4: "Mouse",
            ans: 3,
        },
        {
            question: "First page of Website is termed as?",
            option1: "Index Page",
            option2: "Homepage",
            option3: "Sitemap",
            option4: "Pen Drive",
            ans: 2,
        },
    ];

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index])
    let [lock, setLock] = useState(false)
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);
    let [seconds, setSeconds] = useState(10);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add('bg-green-200')
                setScore(++score)
            } else {
                e.target.classList.add('bg-red-200')
                option_array[question.ans - 1].current.classList.add("bg-green-200")
            }
            setLock(true)
        }
    }

    const next = () => {
        setSeconds(10);
        if (index === data.length - 1) {
            setResult(true);
            return 0;
        }
        setIndex(++index);
        setQuestion(data[index]);
        setLock(false);
        option_array.map((option) => {
            option.current.classList.remove("bg-green-200");
            option.current.classList.remove("bg-red-200");
            return null
        })
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
        setSeconds(10);
    }

    var timer;
    useEffect(() => {

        timer = setInterval(()=> {
            setSeconds(--seconds);
        }, 1000);

        if(seconds === 0)
        {
            clearInterval(timer);
            next()
        }
        return ()=> clearInterval(timer);
    });

    return (
        <div>
            <div className='w-3/5 mx-60 mt-36 bg-white flex flex-col gap-3 rounded-xl p-6 border shadow'>
                {result ?
                    <>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-xl font-bold pb-5'>You scored {score} out of {data.length}</h2>
                            <button onClick={reset} className='flex flex-col items-center m-2 w-1/6 h-8 text-white bg-blue-500 bold text-xl cursor-pointer rounded-md mb-2'>Reset</button>
                        </div>
                        
                    </> :
                    <>
                        <p className='text-sm text-right'>Time remaining: {seconds<10? "0" +seconds:seconds}</p>
                        <h2 className='text-xl font-bold'>{index + 1}. {question.question}</h2>
                        <div className='flex flex-col items-center'>
                            <ul className='list-none w-full'>
                                <li ref={Option1} onClick={(e) => { checkAns(e, 1) }} className='flex items-center h-12 pl-5 border rounded-lg mb-2 cursor-pointer'>{question.option1}</li>
                                <li ref={Option2} onClick={(e) => { checkAns(e, 2) }} className='flex items-center h-12 pl-5 border rounded-lg mb-2 cursor-pointer'>{question.option2}</li>
                                <li ref={Option3} onClick={(e) => { checkAns(e, 3) }} className='flex items-center h-12 pl-5 border rounded-lg mb-2 cursor-pointer'>{question.option3}</li>
                                <li ref={Option4} onClick={(e) => { checkAns(e, 4) }} className='flex items-center h-12 pl-5 border rounded-lg mb-2 cursor-pointer'>{question.option4}</li>
                            </ul>
                            <div onClick={next} className='flex flex-col items-center m-2 w-1/6 h-8 text-white bg-blue-500 bold text-xl cursor-pointer rounded-md mb-2'>Next</div>
                            <div className="">{index + 1} of {data.length} questions</div>
                        </div>
                     </>}
            </div>
        </div>
    )
}

export default Quiz