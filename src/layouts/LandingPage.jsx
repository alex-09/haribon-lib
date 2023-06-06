import Background from "./frames/Background"
import HeaderLayout from "./frames/HeaderLayout"
import "./Patron/Styles.css"


function LandingPage() {
  return (
   
    <div>
    <div
    style={{
      alignItems: "center",
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',  
    }}>
    </div>
    <HeaderLayout/>
    <div>
    <Background/>
    </div>
   
    </div>
     
  )
}

export default LandingPage