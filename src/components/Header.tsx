import { Box, Typography, Container, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

interface HeaderProps {
    onNavigate: (sectionId: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
    const handleScrollToJoin = () => {
        onNavigate('join');
    };

    return (
        <Box
            component="header"
            sx={{
                background: 'linear-gradient(135deg, #3f51b5 0%, #002984 100%)',
                color: 'white',
                textAlign: 'center',
                py: { xs: 6, md: 10 },
                mb: 4,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: 2,
                    }}
                >
                    <SchoolIcon sx={{ fontSize: 60, mb: 2, color: '#f50057' }} />

                    <Typography
                        variant="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 800,
                            letterSpacing: -0.5,
                            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                            mb: 3,
                        }}
                    >
                        Discimmy
                    </Typography>

                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            mb: 3,
                            fontWeight: 400,
                            maxWidth: '800px'
                        }}
                    >
                        Unlock Your Learning Potential
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        sx={{
                            mt: 1,
                            mb: 4,
                            fontSize: '1.2rem',
                            maxWidth: '800px',
                            lineHeight: 1.6,
                        }}
                    >
                        The Platform Where Teaching is Learning and Knowledge Creates Opportunity
                    </Typography>

                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={handleScrollToJoin}
                        sx={{
                            py: 1.5,
                            px: 4,
                            fontSize: '1.1rem',
                            borderRadius: 8,
                            boxShadow: '0 4px 14px rgba(245, 0, 87, 0.4)',
                            '&:hover': {
                                boxShadow: '0 6px 20px rgba(245, 0, 87, 0.6)',
                            }
                        }}
                    >
                        Join the Revolution
                    </Button>
                </Box>
            </Container>

            {/* Background decoration elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.05,
                    background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                }}
            />
        </Box>
    );
};

export default Header;