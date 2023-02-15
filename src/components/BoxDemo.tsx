import { Box } from "./Box";
import { darkMode, lightMode } from "./theme";

export function BoxDemo() {
    return (
        <Box backgroundColor="gray.200" p="4" borderRadius="2xl">
            <Box color="green.500">green.500</Box>
            <Box color="orange.400">orange.400</Box>
            <div className={lightMode}>
                <Box color="main">lightmode using theme+var</Box>
            </div>
            <div className={darkMode}>
                <Box color="main">darkmode using theme+var</Box>
            </div>

            <Box color={{ hover: "green.100" }}>condition.hover green.100</Box>
            <Box color="#5f9ea0">escape hatch cadetblue #5f9ea0</Box>
            <Box hover={{ cursor: "pointer" }}>_hover cursor.pointer</Box>
            <Box color={{ default: "blue.200", hover: "green.400" }} hover={{ color: "red.300" }}>
                _hover cursor.pointer with default from basic condition object
            </Box>
            <Box color="pink.300" hover={{ color: "yellow.400" }}>
                _hover cursor.pointer with default from prop string
            </Box>
            <Box color={{ desktop: "red.400", tablet: "green.400", mobile: "blue.300" }}>color/responsive rgb</Box>
        </Box>
    );
}
