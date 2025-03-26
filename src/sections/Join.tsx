import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    Button,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    useTheme
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Join = () => {
    const theme = useTheme();

    // Data for different user groups
    const userGroups = [
        {
            title: "For Early Adopters",
            icon: <PersonIcon fontSize="large" />,
            description: "Help shape the future of learning by becoming one of our first users.",
            benefits: [
                "Sign up for early access when development begins",
                "Provide valuable feedback on the platform concept and design",
                "Help define the culture of our learning ecosystem",
                "Become a pioneering contributor to our knowledge base",
                "Gain early influence in our evolving community"
            ],
            buttonText: "Sign Up for Early Access",
            color: theme.palette.primary.main
        },
        {
            title: "For Potential Content Creators",
            icon: <SchoolIcon fontSize="large" />,
            description: "Be among the first to share your expertise and help shape our educational standards.",
            benefits: [
                "Express interest in becoming a founding content creator",
                "Contribute to the development of our content standards",
                "Help design effective learning pathways in your domain",
                "Shape our mentorship framework from the ground up",
                "Position yourself as a pioneer in collaborative education"
            ],
            buttonText: "Apply as Content Creator",
            color: theme.palette.secondary.main
        },
        {
            title: "For Interested Organizations",
            icon: <BusinessIcon fontSize="large" />,
            description: "Explore how your organization can be involved from the start and benefit from our innovative approach.",
            benefits: [
                "Provide input on organizational learning needs",
                "Contribute to the development of business solutions",
                "Discuss potential early partnerships for platform testing",
                "Help shape features for team development and talent acquisition",
                "Position your organization at the forefront of educational innovation"
            ],
            buttonText: "Partner With Us",
            color: theme.palette.primary.dark
        }
    ];

    return (
        <Container maxWidth="lg" className="fade-in">
            <Box className="section">
                <Typography variant="h2" component="h1" className="section-title" gutterBottom>
                    Help Build Our Community
                </Typography>

                <Typography variant="h3" component="h2" gutterBottom sx={{ mt: 2, mb: 3 }}>
                    Be a Founding Member of the Learning Revolution
                </Typography>

                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', maxWidth: '900px', mb: 4 }}>
                    The future of education will be collaborative, accessible, and will recognize the true value of
                    knowledge. While Discimmy is still in its conceptual stage, we're looking for visionaries who
                    see the potential of this revolutionary approach to learning and teaching.
                </Typography>

                {/* Visualization placeholder */}
                <Paper
                    sx={{
                        height: 180,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: theme.palette.secondary.light,
                        color: 'white',
                        mb: 6,
                        mt: 2,
                        borderRadius: 3,
                        boxShadow: '0 8px 24px rgba(245, 0, 87, 0.2)',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <Typography variant="h6" sx={{ maxWidth: '80%', textAlign: 'center', zIndex: 2 }}>
                        Forward-looking illustration showing the foundation and growth of a learning community
                    </Typography>
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '120%',
                            height: '120%',
                            background: 'radial-gradient(circle at center, rgba(245, 0, 87, 0.3) 0%, rgba(245, 0, 87, 0.7) 70%)',
                            opacity: 0.7,
                            zIndex: 1,
                        }}
                    />
                </Paper>

                {/* User group cards */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {userGroups.map((group, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: 2,
                                    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        p: 3,
                                        bgcolor: group.color,
                                        color: 'white',
                                        borderRadius: '8px 8px 0 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box sx={{ mr: 2 }}>
                                        {group.icon}
                                    </Box>
                                    <Typography variant="h5" component="h3">
                                        {group.title}
                                    </Typography>
                                </Box>
                                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                                    <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                                        {group.description}
                                    </Typography>

                                    <List dense>
                                        {group.benefits.map((benefit, benefitIndex) => (
                                            <ListItem key={benefitIndex} sx={{ py: 0.75 }}>
                                                <ListItemIcon sx={{ minWidth: 32 }}>
                                                    <CheckCircleOutlineIcon sx={{ color: group.color }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={benefit}
                                                    primaryTypographyProps={{
                                                        variant: 'body1',
                                                        sx: { lineHeight: 1.4 }
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                                <Box sx={{ p: 3, pt: 0 }}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        size="large"
                                        sx={{
                                            bgcolor: group.color,
                                            '&:hover': {
                                                bgcolor: index === 1 ? theme.palette.secondary.dark :
                                                    index === 2 ? theme.palette.primary.dark :
                                                        theme.palette.primary.dark,
                                            },
                                            py: 1.5,
                                            borderRadius: 2
                                        }}
                                    >
                                        {group.buttonText}
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ mb: 6, mt: 2 }} />

                {/* Building together section */}
                <Typography variant="h3" component="h2" gutterBottom>
                    Building Discimmy Together
                </Typography>

                <Grid container spacing={4} sx={{ mb: 4 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem' }}>
                            The future of education will be collaborative, accessible, and will recognize the true value
                            of knowledge. While Discimmy is still in its conceptual stage, we're looking for visionaries
                            who see the potential of this revolutionary approach to learning and teaching.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem' }}>
                            If you're interested in the concept and would like to contribute to its development,
                            we'd love to hear your thoughts and ideas. Together, we can create a platform that
                            transforms how people learn and teach, making quality education accessible to everyone.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ p: 3, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                            <Typography variant="h5" component="h3" gutterBottom color="primary">
                                Our Development Journey
                            </Typography>
                            <List>
                                {[
                                    { text: "Concept Development", icon: <EmojiObjectsIcon color="primary" />, active: true },
                                    { text: "Community Building", icon: <GroupsIcon color="primary" />, active: true },
                                    { text: "Platform Prototyping", icon: <RocketLaunchIcon color="primary" />, active: false },
                                    { text: "Beta Testing", icon: <TrendingUpIcon color="primary" />, active: false }
                                ].map((step, index) => (
                                    <ListItem key={index} sx={{ py: 1 }}>
                                        <ListItemIcon>
                                            {step.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={step.text}
                                            secondary={step.active ? "In Progress" : "Coming Soon"}
                                            primaryTypographyProps={{
                                                fontWeight: step.active ? 600 : 400
                                            }}
                                            secondaryTypographyProps={{
                                                color: step.active ? 'secondary.main' : 'text.secondary'
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="large"
                                    sx={{ borderRadius: 2, px: 4 }}
                                >
                                    Join Our Newsletter
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>

                {/* Final CTA */}
                <Box
                    sx={{
                        mt: 6,
                        p: 4,
                        textAlign: 'center',
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                        color: 'white',
                        boxShadow: '0 8px 32px rgba(63, 81, 181, 0.4)',
                    }}
                >
                    <Typography variant="h4" component="h2" gutterBottom>
                        Ready to Join the Learning Revolution?
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
                        Be part of a platform that's redefining education through shared knowledge and creating
                        opportunities for learners and teachers worldwide.
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{
                            py: 1.5,
                            px: 5,
                            fontSize: '1.1rem',
                            borderRadius: 2,
                            boxShadow: '0 4px 14px rgba(245, 0, 87, 0.4)',
                            '&:hover': {
                                boxShadow: '0 6px 20px rgba(245, 0, 87, 0.6)',
                            }
                        }}
                    >
                        Get Involved Today
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Join;