import { useState,useEffect } from 'react';
import {
  AppShell,
  Navbar,
  Header,  
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Button,
  Table
 
} from '@mantine/core';

import { IconForms, IconHome2, IconReceipt, IconVocabulary } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import DarkModeButton from '../DarkModeButton';
import StdHome from './Routes/StdHome';

function Home() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
    
    return (
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          
          <div>
            <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        
              <Navbar.Section>
                  <Button leftIcon={<IconHome2/>} variant='subtle' color='dark' component={Link} to="/Home">Home</Button>
              </Navbar.Section>
              
              <Navbar.Section>
                <Button leftIcon={<IconForms/>} variant='subtle' color='dark' component={Link} to="/Appointment">Appointment</Button>
              </Navbar.Section>

              <Navbar.Section>
                <Button leftIcon={<IconVocabulary/>} variant='subtle' color='dark' component={Link} to="/Resources">Resources</Button>
              </Navbar.Section>

              <Navbar.Section>
                <Button leftIcon={<IconReceipt/>} variant='subtle' color='dark' component={Link} to="/TransactionRecord" >Transaction Records</Button>
              </Navbar.Section>

              <Navbar.Section>
                <Button leftIcon={<IconReceipt/>} variant='subtle' color='dark' component={Link} to="/Admin" >Admin</Button>
              </Navbar.Section>

              <Navbar.Section>
                <Logout/>
              </Navbar.Section>

            </Navbar>
          </div>
          
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <source />
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
                
              </MediaQuery>
              <Text>Pamantasan ng Lungsod ng Maynila</Text>
              <div  style={{
                    alignItems: "center",
                    justifyContent: 'flex-end',
                    marginLeft: 'auto',
                    }}>
                
                <DarkModeButton/> 
                </div>
            </div>
    
          </Header>
        }
      >
        
        <Text>Welcome, {name}</Text>
        <Text>{email}</Text>
        <Text>Results:</Text>

        {/* <Table highlightOnHover withBorder>
          <tr>
            <th color='blue'>Book</th>
          </tr>
          <tr>
            <th>test</th>
          </tr>
        </Table>
         */}
          <StdHome/>
      </AppShell>
  )
}

export default Home