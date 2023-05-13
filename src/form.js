import React,{useState,useEffect} from 'react'


 function Form() {
    const data={name: "", email:"",password:""};
    const [inputData, setInputData]=useState(data);
    const [flag, setFlag]=useState(false);
    useEffect(()=>{
        console.log("registered");
    },[flag])
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData);
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are Mandatory");
        }
        else{
            setFlag(true);
        }
    }



  return (
    <>
<pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name},You have resistered successfully</h2>:""}</pre>


    
    <form className='container' onSubmit={handleSubmit}>
    <div className='header'>
        <h1>Registration from</h1>
    </div>
    <div>
        <input type='text' placeholder='enter your name' name='name' value={inputData.name} onChange={handleData}></input>
    </div>
    <br/>
    <div>
        <input type='text' placeholder='enter your email' name='email' value={inputData.email} onChange={handleData}></input>
    </div>
    <br/>
    <div>
        <input type='text' placeholder='enter your password' name='password' value={inputData.password} onChange={handleData}></input>
    </div>
    <br/>
    <button type='submit'>submit</button>

    </form>
    </>
  )
}
export default Form
