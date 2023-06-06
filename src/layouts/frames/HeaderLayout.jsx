import { Header, Text, Image } from '@mantine/core';
import logo from "..//../assets/logo.png"
import DarkModeButton from '../DarkModeButton';
import Login from '../Login';
import "../Patron/Styles.css"

function HeaderLayout() {
  return (
    <Header height={80} p="md" style={{ display: "flex" }}>
      <div
        style={{
          zIndex: "500",
          display: "flex",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
         <div style={{ width: 65, marginLeft: "-2.rem" }}>
            <Image src={logo} alt="PLM Logo" />
          </div>
        <div style={{
            fontFamily: "Poor Story",
            display: "flex",
            flexDirection: "row",
          }}>
<Text
            style={{
              fontFamily: "Poor Story",
              fontSize: "1.25rem",
              marginTop: "0.200rem",
              marginLeft: "1rem",
            }}
          >
            Pamantasa ng Lungsod ng Maynila
          </Text>
        </div >
         
      </div>
      <div style={{
            fontFamily: "Poor Story",
            display: "flex",
            flexDirection: "row",
          }}>
         <DarkModeButton/>
         <Login/>
      </div>
         
      </Header>
 
  )
}

export default HeaderLayout