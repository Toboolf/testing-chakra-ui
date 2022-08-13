import { Box, forwardRef, HStack } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import ComposedBadge from "./composedBadge";

interface BadgeSelectDislayProps {
  selectedBadges: ComposedBadge[];
}

const BadgeSelectDislay = forwardRef<BadgeSelectDislayProps, "div">(
  ({selectedBadges, ...props}, ref) => {
    return (
      <Box p={1} rounded="md" border="1px" borderColor="gray.400" ref={ref} {...props}>
        <HStack justify="space-between">
          <HStack spacing={1} overflow="hidden">
            {selectedBadges.map((badge) => (
              <div key={badge.key}>{badge.badge}</div>
            ))}
          </HStack>
          <FaChevronDown />
        </HStack>
      </Box>
    );
  }
);

export default BadgeSelectDislay;
