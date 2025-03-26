import { AppBar, Toolbar, Tabs, Tab, useMediaQuery, useTheme, Menu, MenuItem, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

interface NavigationProps {
    sections: {
        id: string;
        label: string;
        component: React.ComponentType;
    }[];
    onNavigate: (sectionId: string) => void;
}

const Navigation = ({ sections, onNavigate }: NavigationProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [activeSection, setActiveSection] = useState('vision');
    const [isSticky, setIsSticky] = useState(false);

    // Handle scrolling effects
    useEffect(() => {
        const handleScroll = () => {
            // Check header height to determine when navigation should become sticky
            const headerElement = document.querySelector('header');
            const headerHeight = headerElement ? headerElement.offsetHeight : 0;

            // Set sticky state when scrolled past header
            setIsSticky(window.scrollY > headerHeight - 10);

            // Find the section that is currently in view for active tab
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call to set states
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    // For desktop view with tabs
    const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
        setActiveSection(newValue);
        onNavigate(newValue);
    };

    // For mobile view with dropdown menu
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (sectionId?: string) => {
        setAnchorEl(null);
        if (sectionId) {
            setActiveSection(sectionId);
            onNavigate(sectionId);
        }
    };

    return (
        <>
            <AppBar
                position={isSticky ? "fixed" : "static"}
                color="default"
                elevation={isSticky ? 4 : 0}
                sx={{
                    bgcolor: 'background.paper',
                    borderBottom: 1,
                    borderColor: 'divider',
                    transition: 'box-shadow 0.3s ease',
                    zIndex: theme.zIndex.appBar,
                }}
            >
                <Toolbar variant="dense" disableGutters>
                    {isMobile ? (
                        <Button
                            onClick={handleMenuOpen}
                            startIcon={<MenuIcon />}
                            variant="text"
                            color="primary"
                            sx={{
                                textTransform: 'none',
                                fontSize: '1rem',
                                py: 1,
                                mx: 'auto'
                            }}
                        >
                            {sections.find(s => s.id === activeSection)?.label || 'Navigate'}
                        </Button>
                    ) : (
                        <Tabs
                            value={activeSection}
                            onChange={handleTabChange}
                            variant="fullWidth"
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="section navigation"
                            sx={{ width: '100%' }}
                        >
                            {sections.map((section) => (
                                <Tab
                                    key={section.id}
                                    label={section.label}
                                    value={section.id}
                                    sx={{
                                        textTransform: 'none',
                                        fontWeight: activeSection === section.id ? 700 : 400,
                                        fontSize: '1rem',
                                        py: 2,
                                        '&:hover': {
                                            backgroundColor: 'rgba(63, 81, 181, 0.05)',
                                        }
                                    }}
                                />
                            ))}
                        </Tabs>
                    )}
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => handleMenuClose()}
                    >
                        {sections.map((section) => (
                            <MenuItem
                                key={section.id}
                                onClick={() => handleMenuClose(section.id)}
                                selected={activeSection === section.id}
                            >
                                {section.label}
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>

            {/* Add placeholder when nav is fixed to prevent content jump */}
            {isSticky && <Toolbar variant="dense" />}
        </>
    );
};

export default Navigation;