import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import HookForm from './Components/HookForm/HookForm'
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {
  const handleSignUpSubmit = data =>{
    console.log('sign up data', data)
    
  }
  const handleUpdateProfile = data =>{
    console.log('profile update data', data)
  }

  
  return (
    <>
      
      <h1>Form master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={'Sign up'}
       handleSubmit={handleSignUpSubmit}>
       <div>
        <h2>Sign Up</h2>
        <p>Please Sign up right now</p>
       </div>
       </ReuseableForm>
      <ReuseableForm formTitle={'Profile update'} 
      handleSubmit={handleUpdateProfile} submitBtnText='update'>
      <div>
        <h2>Profile update</h2>
        <p>Your profile is updated</p>
      </div>
      </ReuseableForm> */}
      
    </>
  )
}

export default App
