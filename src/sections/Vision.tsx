import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    Paper,
    useTheme
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Vision = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="lg" className="fade-in">
            <Box className="section">
                <Typography variant="h2" component="h1" className="section-title" gutterBottom>
                    Transform Education Through Shared Knowledge
                </Typography>

                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', maxWidth: '900px', mb: 3 }}>
                    In a world where technological skills evolve at breakneck speed and traditional
                    education struggles to keep pace, Discimmy introduces a revolutionary approach:
                    <span className="highlight-text"> learning through teaching</span>.
                </Typography>

                {/* Visualization Placeholder */}
                <Paper
                    sx={{
                        height: 250,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: theme.palette.primary.light,
                        color: 'white',
                        mb: 6,
                        mt: 2,
                        borderRadius: 3,
                        boxShadow: '0 8px 24px rgba(63, 81, 181, 0.2)',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <Typography variant="h6" sx={{ maxWidth: '80%', textAlign: 'center', zIndex: 2 }}>
                        Dynamic illustration showing the transformation from traditional one-way
                        learning to reciprocal knowledge exchange
                    </Typography>
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '120%',
                            height: '120%',
                            background: 'radial-gradient(circle at center, rgba(245, 0, 87, 0.3) 0%, rgba(63, 81, 181, 0.5) 70%)',
                            opacity: 0.7,
                            zIndex: 1,
                        }}
                    />
                </Paper>

                <Typography variant="h3" component="h2" gutterBottom sx={{ mt: 6, mb: 4 }}>
                    The Problems We're Solving
                </Typography>

                <Grid container spacing={3} sx={{ mb: 6 }}>
                    {[
                        {
                            text: "Financial barriers restrict access to quality education worldwide",
                            icon: <MonetizationOnIcon fontSize="large" />
                        },
                        {
                            text: "Skills become obsolete within 2-5 years in technical fields",
                            icon: <MenuBookIcon fontSize="large" />
                        },
                        {
                            text: "Passive learning models limit knowledge retention and practical application",
                            icon: <SchoolIcon fontSize="large" />
                        },
                        {
                            text: "Expertise remains siloed, preventing efficient knowledge transfer",
                            icon: <PeopleIcon fontSize="large" />
                        },
                        {
                            text: "Education systems struggle to adapt to rapidly changing skill requirements",
                            icon: <AccountBalanceIcon fontSize="large" />
                        }
                    ].map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card className="feature-card" sx={{
                                height: '100%',
                                borderRadius: 2,
                                bgcolor: index % 2 === 0 ? 'rgba(63, 81, 181, 0.03)' : 'white'
                            }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', mb: 2, color: theme.palette.primary.main }}>
                                        {item.icon}
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {item.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <div className="section-divider" />

                <Typography variant="h3" component="h2" gutterBottom sx={{ mt: 6, mb: 4 }}>
                    Our Solution: A Learning Ecosystem That Benefits Everyone
                </Typography>

                <Box sx={{ my: 4 }}>
                    <Typography paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                        Discimmy creates a balanced ecosystem where:
                    </Typography>

                    <Grid container spacing={3} sx={{ mt: 2 }}>
                        {[
                            "Experts monetize their knowledge efficiently without traditional overheads",
                            "Learners access quality education regardless of financial circumstances",
                            "Knowledge becomes a valued resource with both educational and economic worth",
                            "Everyone participates in both teaching and learning appropriate to their expertise",
                            "Practical application bridges the gap between theory and real-world skills"
                        ].map((point, index) => (
                            <Grid item xs={12} key={index}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 3,
                                        display: 'flex',
                                        alignItems: 'center',
                                        background: index % 2 === 0
                                            ? `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
                                            : `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
                                        color: 'white',
                                        borderRadius: 2,
                                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-3px)',
                                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                                        }
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontWeight: 500, fontSize: '1.05rem' }}>
                                        <strong>{index + 1}.</strong> {point}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <div className="section-divider" />

                <Typography variant="h3" component="h2" gutterBottom sx={{ mt: 6, mb: 4 }}>
                    The Sustainability Model: Platform Credits and Treasury System
                </Typography>

                <Typography paragraph sx={{ fontSize: '1.1rem', mb: 4, maxWidth: '900px' }}>
                    To ensure long-term sustainability while maintaining our core mission of accessible education:
                </Typography>

                <Grid container spacing={3} sx={{ mb: 6 }}>
                    {[
                        {
                            title: "Platform Credits",
                            content: "Function as our learning economy's currency, enabling knowledge exchange without financial barriers",
                            icon: <MonetizationOnIcon fontSize="large" />
                        },
                        {
                            title: "Treasury System",
                            content: "Collects a small percentage of monetary transactions to fund essential educational infrastructure",
                            icon: <AccountBalanceIcon fontSize="large" />
                        },
                        {
                            title: "Balanced Approach",
                            content: "Ensures both educational accessibility and platform sustainability",
                            icon: <PeopleIcon fontSize="large" />
                        },
                        {
                            title: "Reinvestment",
                            content: "Treasury funds are reinvested to commission critical educational content from domain experts",
                            icon: <AutoStoriesIcon fontSize="large" />
                        },
                        {
                            title: "Incentive System",
                            content: "The system incentivizes both free contribution and fair compensation for expertise",
                            icon: <SchoolIcon fontSize="large" />
                        }
                    ].map((item, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Card sx={{
                                height: '100%',
                                borderRadius: 2,
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                }
                            }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Box sx={{ display: 'flex', mb: 2, color: theme.palette.primary.main }}>
                                        {item.icon}
                                    </Box>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {item.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="h3" component="h2" gutterBottom sx={{ mt: 6, mb: 4 }}>
                    The Revolutionary Core: "By Teaching, We Learn"
                </Typography>

                <Typography paragraph sx={{ fontSize: '1.1rem', mb: 4, maxWidth: '900px' }}>
                    Our platform is built on the age-old principle of "docendo discimus" – by teaching, we learn:
                </Typography>

                <Grid container spacing={3}>
                    {[
                        "Teaching others deepens your understanding of concepts",
                        "Explaining ideas forces clarity of thought",
                        "Helping others reinforces your own knowledge",
                        "Creating educational content cements expertise",
                        "Mentorship accelerates growth for both parties"
                    ].map((point, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    p: 3,
                                    borderLeft: 4,
                                    borderColor: theme.palette.secondary.main,
                                    bgcolor: 'background.paper',
                                    height: '100%',
                                    borderRadius: '0 4px 4px 0',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography variant="body1" sx={{ fontWeight: 400 }}>
                                    {point}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Vision;
