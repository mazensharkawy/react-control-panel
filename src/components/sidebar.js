import React from 'react';
import { Menu, Popover, Position, toaster, Button, Icon } from 'evergreen-ui'
const Sidebar = () => {
    return (
        <div className='sidenav'>
            <Popover
                position={Position.BOTTOM_LEFT}
                content={
                    <Menu>
                        <Menu.Group>
                            <Menu.Item
                                onSelect={() => toaster.notify('Share')}
                            >
                               table 1
                            </Menu.Item>
                            <Menu.Item
                                onSelect={() => toaster.notify('Share')}
                            >
                               table 2
                            </Menu.Item>
                            <Menu.Item
                                onSelect={() => toaster.notify('Share')}
                            >
                               table 3
                            </Menu.Item>
                        </Menu.Group>
                    </Menu>
                }
            >
                <Button marginRight={16}>Tables <Icon icon='chevron-down' /></Button>
            </Popover>
        </div>
    );
}
export default Sidebar;