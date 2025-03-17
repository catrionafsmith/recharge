import { NavLink } from '@mantine/core';
import { IconHome2, IconActivity } from '@tabler/icons-react';

export default function NavBarLinks() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="Home"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />

      <NavLink
        href="#required-for-focus"
        label="7 Minute Workout"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Hamstrings"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        active
        variant="subtle"
      />
      <NavLink
        href="#required-for-focus"
        label="Flexibility"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Ask a Question"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        variant="subtle"
        active
      />
    </>
  );
}
