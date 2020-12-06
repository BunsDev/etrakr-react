import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export const DarkModeToggle = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      {...props}
      colorScheme="none"
      aria-label="Toggle Dark Mode"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    />
  );
};
