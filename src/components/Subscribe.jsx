import React, { useState } from 'react'
import { ImSpinner2 } from 'react-icons/im'

function Subscribe() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [btnText, setBtnText] = useState('Sign up')
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const validateEmail = (email) => {
        // Regular expression for email validation
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };

    const handleSingup = () => {
        if (btnText === 'Thank You')
            return;

        if (name === '' && email === '') {
            setNameError(true)
            setEmailError(true)
            return;
        }
        else if (name.length > 0 && email.length > 0 && !validateEmail(email)) {
            setNameError(false)
            setEmailError(true)
            return;
        }
        else if (name.length > 0 && email.length == 0) {
            setNameError(false)
            setEmailError(true)
            return;
        }
        else if (name.length == 0 && email.length > 0) {
            setNameError(true)
            setEmailError(false)
            return;
        }
        else {
            setNameError(false)
            setEmailError(false)
        }

        setLoading(true)
        setBtnText('');
        setTimeout(() => {
            setLoading(false)
            setBtnText('Thank You')
        }, 1000)
    }

    return (
        <div className='overflow-x-hidden' id='signup'>
            <div className='targetWrapper px-2 py-10 flex items-center justify-start w-[3840px] h-[600px]'>
                <div className='footercardWrapper px-20 rounded-2xl flex items-center w-[1400px] h-[500px] gap-5 ml-[60px]'>
                    <div className='w-[50%]'>
                        <p className='text-5xl text-[#2B0A6C] font-bold'>Web3 is founded upon the principle of trust</p>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <p className='text-2xl text-[#2B0A6C] font-medium max-w-[354px]'>Explore our database by registering for test access here.</p>
                        <div className='flex flex-col gap-8 w-[460px]'>
                            <input type="text" placeholder='Name' className={`p-4 rounded-lg outline-none ${nameError && 'border-red-500 border-[2px] border-solid'}`} value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder='Email' className={`p-4 rounded-lg outline-none ${emailError && 'border-red-500 border-[2px] border-solid'}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button className='w-full py-4 px-10 text-lg text-[#F6F8FB] rounded-lg font-semibold hover:opacity-90 transitionBg flex items-center justify-center' onClick={handleSingup}>
                                {loading ? <ImSpinner2 size={30} className='animate-spin' /> : btnText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe