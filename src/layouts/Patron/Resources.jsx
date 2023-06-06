import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,  
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Accordion,
  Container,
  Anchor,
  Button
} from '@mantine/core';

import { Link } from 'react-router-dom';
import Logout from '../Logout';
import DarkModeButton from '../DarkModeButton';
import { IconForms, IconHome2, IconReceipt, IconVocabulary } from '@tabler/icons-react';

function Resources() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
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
       <div>

       <Container> 
        <Text>Online Library Resources Subscriptions</Text>
        
        <Accordion variant="separated" radius="md" defaultValue="customization">
          <Accordion.Item value="AccessEngi">
            <Accordion.Control>
            <Anchor href="https://www.accessengineeringlibrary.com/" target="_blank">ACCESS Engineering</Anchor></Accordion.Control>
            <Accordion.Panel>Username: pnlnm </Accordion.Panel>
            <Accordion.Panel>Password: engineering</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="AccessPhysio">
            <Accordion.Control>
            <Anchor href="https://accessphysiotherapy.mhmedical.com/" target="_blank">ACCESS Physiotherapy</Anchor></Accordion.Control>
            <Accordion.Panel>Username: pnlnm </Accordion.Panel>
            <Accordion.Panel>Password: Medicine20</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="Emerald">
            <Accordion.Control>
            <Anchor href="https://www.emerald.com/insight/" target="_blank">Emerald Insight</Anchor></Accordion.Control>
            <Accordion.Panel>Organization Access Number (OAN): 182135078923575</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="AccessPhysio">
            <Accordion.Control>
            <Anchor href="https://accessphysiotherapy.mhmedical.com/" target="_blank">ACCESS Physiotherapy</Anchor></Accordion.Control>
            <Accordion.Panel>Username: pnlnm </Accordion.Panel>
            <Accordion.Panel>Password: Medicine20</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="Wiley Online Library">
            <Accordion.Control>
            <Anchor href="https://onlinelibrary.wiley.com/" target="_blank">Wiley Online Library</Anchor></Accordion.Control>
            <Accordion.Panel>Username: PLMINTSLOGIN </Accordion.Panel>
            <Accordion.Panel>Password: PLM2020PW</Accordion.Panel>
          </Accordion.Item>
          
        </Accordion>
      </Container>
      
       </div>
      </AppShell>
  )
}

export default Resources