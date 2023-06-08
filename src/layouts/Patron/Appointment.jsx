import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,  
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Button,
  Group, 
  TextInput, 
  NumberInput, 
  Box
} from '@mantine/core';

import DarkModeButton from '../DarkModeButton';
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import { IconForms, IconHome2, IconReceipt, IconVocabulary } from '@tabler/icons-react';
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';



function Appointment() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const form = useForm({
      initialValues: {
        name: '',
        job: '',
        email: '',
        favoriteColor: '',
        age: 18,
      },
  
      validate: {
        name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
        job: isNotEmpty('Enter your current job'),
        email: isEmail('Invalid email'),
        favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
        age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
      },
    });
    
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
            <div>
            <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => {})}>
      <TextInput label="Name" placeholder="Name" withAsterisk {...form.getInputProps('name')} />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        {...form.getInputProps('age')}
      />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
            </div>
  
      </AppShell>
  )
}

export default Appointment