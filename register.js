const form=document.getElementById('form');
const name=document.getElementById('last');
const email=document.getElementById('mail');
const phone=document.getElementById('cont');
const domain=document.getElementById('1');
const resume=document.getElementById('cv');

form.addEventListener('submit',e=>
    {
        e.preventDefault();

        validateInputs();
    }
);

const setError=(element,message)=>
    {
        const cls=element.parentElement;
        const errorDisplay=cls.querySelector('.error');

        errorDisplay.innerText=message;
        cls.classList.add('error');
        cls.classList.remove('success');
    }

    const setSuccess=element =>
        {
            const cls=element.parentElement;
            const errorDisplay=cls.querySelector('.error');
    
            errorDisplay.innerText='';
            cls.classList.add('success');
            cls.classList.remove('error');
        }

    const isvalidemail=email=>
        {
            const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
const validateInputs=()=>
    {
        const nameValue=name.value.trim();
        const emailValue=email.value.trim();
        const phoneValue=phone.value.trim();
        const domainValue=domain.value.trim();
        const resumeValue=resume.value.trim();

        if(nameValue==='')
            {
                setError(name,'Name is required');
            }
            else{
                setSuccess(name);
            }

            if(emailValue==='')
                {
                    setError(email,'Email is required');
                }
                else if(!isvalidemail(emailValue))
                    {
                        setError(email,'Provide a valid email address'); 
                    }
                else{
                    setSuccess(email);
                }
                if(phoneValue==='')
                    {
                        setError(phone,'Contact is required');
                    }
                    else if(phoneValue.length<10)
                        {
                            setError(phone,'Contact must be 10 digits.');
                        }
                    else{
                        setSuccess(phone);
                    }
                    if(domainValue==='')
                        {
                            setError(domain,'Domain is required');
                        }
                        else{
                            setSuccess(domain);
                        }
                        if(resumeValue==='')
                            {
                                setError(resume,'Resume is required');
                            }
                            else{
                                setSuccess(resume);
                            }
    };