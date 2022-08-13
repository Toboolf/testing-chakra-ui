import {
  Badge,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import BadgeSelectDislay from "./badgeSelectDisplay";
import ComposedBadge from "./composedBadge";

const BadgeSelect = () => {
  const badges = [
    <Badge colorScheme="blue">stand by</Badge>,
    <Badge colorScheme="green">active</Badge>,
    <Badge colorScheme="red">expired</Badge>,
    <Badge colorScheme="purple">another</Badge>,
  ];
  const composedBadges: ComposedBadge[] = badges.map((badge, index) => {
    return { badge: badge, isSelected: false, key: `badge${index}` };
  });

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={BadgeSelectDislay} selectedBadges={composedBadges} />
      <MenuList>
        <MenuOptionGroup>
          {composedBadges.map((badge) => (
            <MenuItemOption
              isChecked={badge.isSelected}
              py={0.5}
              type="checkbox"
              key={badge.key}
            >
              {badge.badge}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default BadgeSelect;
