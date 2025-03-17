import './App.css'
import '@mantine/core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppShell, Burger, Flex, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import TimedCarousel from './components/TimedCarousel';
import { NavLink, Image } from '@mantine/core';
import { IconHome2, IconActivity } from '@tabler/icons-react';
import {BrowserRouter as Router,
Route,
Routes
} from 'react-router-dom'
import Hamstrings from './components/Hamstrings';
import Flexibility from './components/Flexibility';
import ChatForm from './components/ChatForm';
import Home from './components/Home';
import NewForm from './components/NewForm';


function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Router>
    <MantineProvider theme={{ fontFamily: 'Roboto, sans-serif', headings: { fontFamily: 'Greycliff CF, sans-serif' }, }}>
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header >
        <Flex gap={20} justify={'center'} align={'center'}>
        <Image h={50} w={50}  src="energy.png"/>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <h1>Recharge!</h1>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar withBorder={false}>
      <NavLink
        href="/"
        label="Home"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />

      <NavLink
        href="/7"
        label="7 Minute Workout"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        href="/hamstrings"
        label="Hamstrings"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        active
        variant="subtle"
      />
      <NavLink
        href="/flexibility"
        label="Flexibility"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        href="/question"
        label="Ask a Question"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        href="/form"
        label="New form"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      </AppShell.Navbar>

      <AppShell.Main>Welcome to Recharge!
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/7" element={<TimedCarousel/>}/>
          <Route path="/hamstrings" element={<Hamstrings/>}/>
          <Route path="/flexibility" element={<Flexibility/>}/>
          <Route path="/question" element={<ChatForm/>}/>
          <Route path="/form" element={NewForm}/>
        </Routes>
      </AppShell.Main>
    </AppShell>
      </MantineProvider>
    </Router>
  )
}

export default App
