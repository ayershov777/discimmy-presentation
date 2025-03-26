import { Box, Container, Typography, Grid, Link, Divider, IconButton, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';

const Footer = () => {
    const theme = useTheme();
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'About',
            links: [
                { name: 'Our Vision', url: '#vision' },
                { name: 'Team', url: '#' },
                { name: 'Careers', url: '#' },
                { name: 'Press', url: '#' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Documentation', url: '#' },
                { name: 'Blog', url: '#' },
                { name: 'Community', url: '#' },
                { name: 'Help Center', url: '#' },
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Terms of Service', url: '#' },
                { name: 'Privacy Policy', url: '#' },
                { name: 'Cookie Policy', url: '#' },
                { name: 'Content Policy', url: '#' },
            ]
        }
    ];

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.dark',
                color: 'white',
                pt: 8,
                pb: 4,
                mt: 8,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Logo and Description */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <SchoolIcon sx={{ fontSize: 32, mr: 1, color: theme.palette.secondary.main }} />
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                Discimmy
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ maxWidth: '300px', mb: 3 }}>
                            Transforming education through shared knowledge. Our platform makes
                            learning accessible to everyone through contribution, not just financial means.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton aria-label="Facebook" size="small" sx={{ color: 'white' }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="Twitter" size="small" sx={{ color: 'white' }}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton aria-label="LinkedIn" size="small" sx={{ color: 'white' }}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton aria-label="GitHub" size="small" sx={{ color: 'white' }}>
                                <GitHubIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Footer Sections */}
                    {footerSections.map((section) => (
                        <Grid item xs={12} sm={4} md={2} key={section.title}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                                {section.title}
                            </Typography>
                            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                                {section.links.map((link) => (
                                    <Box component="li" key={link.name} sx={{ mb: 1 }}>
                                        <Link
                                            href={link.url}
                                            underline="hover"
                                            sx={{
                                                color: 'white',
                                                opacity: 0.8,
                                                transition: 'opacity 0.2s',
                                                '&:hover': { opacity: 1 }
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    ))}

                    {/* Newsletter Signup Placeholder */}
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                            Stay Updated
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Sign up for our newsletter to receive updates on our progress and
                            early access opportunities.
                        </Typography>
                        <Box
                            sx={{
                                bgcolor: 'rgba(255,255,255,0.1)',
                                borderRadius: 1,
                                p: 2,
                                textAlign: 'center',
                            }}
                        >
                            <Typography variant="body2">
                                Email signup form coming soon
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 4 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        © {currentYear} Discimmy. All rights reserved.
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Made with passion for accessible education
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;