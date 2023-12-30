import './App.css'
import '@mantine/core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppShell, Burger, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavbarMinimal } from './components/NavBarMinimal';
import TimedCarousel from './components/TimedCarousel';


function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
    <MantineProvider>
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>Recharge</div>
      </AppShell.Header>

      <AppShell.Navbar withBorder={false}>
        <NavbarMinimal/>
      </AppShell.Navbar>

      <AppShell.Main>Welcome to Recharge!
        <TimedCarousel/>
      </AppShell.Main>
    </AppShell>
      </MantineProvider>
    </>
  )
}

export default App
