import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Avatar,
    Paper,
    Tabs,
    Tab,
    useTheme
} from '@mui/material';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

const Journey = () => {
    const theme = useTheme();
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const userTypes = [
        { value: 0, label: "For Learners", icon: <PersonIcon /> },
        { value: 1, label: "For Experts", icon: <SchoolIcon /> },
        { value: 2, label: "For Organizations", icon: <BusinessIcon /> },
    ];

    const journeyContent = [
        // Learner Journey
        {
            stages: [
                {
                    title: "Start With Immediate Access",
                    points: [
                        "Explore free introductory courses across dozens of domains",
                        "Receive 250 starter credits to unlock additional learning content",
                        "Join peer learning communities on day one",
                        "Begin building a professional portfolio through guided projects",
                        "Connect with mentors at various expertise levels"
                    ],
                    icon: <PersonIcon fontSize="large" />
                },
                {
                    title: "Progress Through Contribution",
                    points: [
                        "Earn credits by helping peers, offering feedback, and creating resources",
                        "Access increasingly advanced content through your contributions",
                        "Develop demonstrable skills through practical projects",
                        "Build reputation through quality participation",
                        "Create a professional portfolio showcasing your capabilities"
                    ],
                    icon: <TrendingUpIcon fontSize="large" />
                },
                {
                    title: "Achieve Career Goals",
                    points: [
                        "Gain industry-relevant skills validated by experts",
                        "Develop a comprehensive portfolio of work",
                        "Build a professional network across your field",
                        "Receive expert endorsements of your capabilities",
                        "Connect with career opportunities through the platform"
                    ],
                    icon: <EmojiEventsIcon fontSize="large" />
                }
            ]
        },
        // Expert Journey
        {
            stages: [
                {
                    title: "Efficient Knowledge Monetization",
                    points: [
                        "Offer premium mentorship with direct compensation",
                        "Invest in creating educational content that generates ongoing returns",
                        "Apply for treasury funding to develop core educational resources",
                        "Build reputation that expands future earning opportunities",
                        "Connect with motivated learners without marketing overhead"
                    ],
                    icon: <WorkIcon fontSize="large" />
                },
                {
                    title: "Multiple Revenue Streams",
                    points: [
                        "Direct payment for premium mentorship sessions",
                        "Passive income from published learning resources",
                        "Treasury funding for specialized content development",
                        "Credits that can be invested in future revenue-generating content",
                        "Platform features that maximize the value of your expertise"
                    ],
                    icon: <TrendingUpIcon fontSize="large" />
                },
                {
                    title: "Beyond Financial Rewards",
                    points: [
                        "Deepen your own expertise through teaching",
                        "Develop recognition as a domain authority",
                        "Influence your field through educational leadership",
                        "Build a professional network of peers and emerging talents",
                        "Create meaningful impact in your area of expertise"
                    ],
                    icon: <PublicIcon fontSize="large" />
                }
            ]
        },
        // Organization Journey
        {
            stages: [
                {
                    title: "Develop Your Team",
                    points: [
                        "Access specialized training tailored to your industry needs",
                        "Connect your employees with leading domain experts",
                        "Track demonstrable skill development through projects",
                        "Enable peer learning across your organization",
                        "Create custom learning pathways for specific roles"
                    ],
                    icon: <GroupsIcon fontSize="large" />
                },
                {
                    title: "Discover Exceptional Talent",
                    points: [
                        "Identify candidates based on verified skills and projects",
                        "Review comprehensive portfolios showing practical capabilities",
                        "Connect with prospects who demonstrate self-directed learning",
                        "Find specialists with precisely the expertise you need",
                        "Engage with emerging talent before they enter the job market"
                    ],
                    icon: <ConnectWithoutContactIcon fontSize="large" />
                },
                {
                    title: "Transform Your Organization",
                    points: [
                        "Build a learning-centered organizational culture",
                        "Foster innovation through cross-domain knowledge exchange",
                        "Develop internal knowledge sharing capabilities",
                        "Create continuity of expertise through mentorship systems",
                        "Adapt quickly to emerging technologies and methodologies"
                    ],
                    icon: <SportsScoreIcon fontSize="large" />
                }
            ]
        }
    ];

    return (
        <Container maxWidth="lg" className="fade-in">
            <Box className="section">
                <Typography variant="h2" component="h1" className="section-title" gutterBottom>
                    Your Journey on Discimmy
                </Typography>

                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', maxWidth: '900px', mb: 4 }}>
                    Discimmy offers personalized learning and teaching experiences tailored to your
                    unique goals and expertise. Discover how different users thrive on our platform.
                </Typography>

                <Box sx={{ mb: 6, mt: 4 }}>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        aria-label="user journey tabs"
                        variant="fullWidth"
                        sx={{
                            mb: 5,
                            '.MuiTabs-indicator': {
                                height: 3,
                                borderRadius: '3px 3px 0 0',
                            },
                            '.MuiTab-root': {
                                py: 2,
                                fontSize: '1rem',
                            }
                        }}
                    >
                        {userTypes.map((type) => (
                            <Tab
                                key={type.value}
                                icon={type.icon}
                                label={type.label}
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: tabValue === type.value ? 600 : 400,
                                    fontSize: '1rem',
                                }}
                            />
                        ))}
                    </Tabs>

                    {journeyContent.map((journey, journeyIndex) => (
                        <Box key={journeyIndex} sx={{ display: tabValue === journeyIndex ? 'block' : 'none' }}>
                            <Grid container spacing={4}>
                                {journey.stages.map((stage, stageIndex) => (
                                    <Grid item xs={12} md={4} key={stageIndex}>
                                        <Card
                                            sx={{
                                                height: '100%',
                                                borderRadius: 2,
                                                boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                                                position: 'relative',
                                                overflow: 'visible',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: -15,
                                                    left: 20,
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: '50%',
                                                    backgroundColor: stageIndex === 0 ? theme.palette.primary.main :
                                                        stageIndex === 1 ? theme.palette.primary.light :
                                                            theme.palette.secondary.main,
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    zIndex: 10,
                                                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                                }
                                            }}
                                        >
                                            <CardHeader
                                                title={stage.title}
                                                avatar={
                                                    <Avatar
                                                        sx={{
                                                            bgcolor: stageIndex === 0 ? theme.palette.primary.main :
                                                                stageIndex === 1 ? theme.palette.primary.light :
                                                                    theme.palette.secondary.main
                                                        }}
                                                    >
                                                        {stage.icon}
                                                    </Avatar>
                                                }
                                                titleTypographyProps={{
                                                    variant: 'h6',
                                                    fontWeight: 600,
                                                    color: stageIndex === 0 ? theme.palette.primary.main :
                                                        stageIndex === 1 ? theme.palette.primary.main :
                                                            theme.palette.secondary.main
                                                }}
                                                sx={{ pb: 0 }}
                                            />
                                            <CardContent>
                                                <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                                                    {stage.points.map((point, pointIndex) => (
                                                        <Box
                                                            component="li"
                                                            key={pointIndex}
                                                            sx={{
                                                                mb: 1.5,
                                                                '&::marker': {
                                                                    color: stageIndex === 0 ? theme.palette.primary.main :
                                                                        stageIndex === 1 ? theme.palette.primary.light :
                                                                            theme.palette.secondary.main
                                                                }
                                                            }}
                                                        >
                                                            <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>
                                                                {point}
                                                            </Typography>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    ))}
                </Box>

                {/* Journey Visualization */}
                <Paper
                    sx={{
                        mt: 6,
                        mb: 4,
                        p: 4,
                        textAlign: 'center',
                        background: `linear-gradient(135deg, ${theme.palette.primary.light}40 0%, ${theme.palette.secondary.light}40 100%)`,
                        borderRadius: 3,
                        boxShadow: 'none',
                    }}
                >
                    <Typography variant="h5" color="primary" gutterBottom>
                        A Platform That Evolves With You
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mx: 'auto' }}>
                        Discimmy adapts to your changing needs as you grow, from first-time learner
                        to recognized expert. Our unique approach ensures everyone can both learn
                        and teach, creating a vibrant ecosystem of knowledge exchange that benefits all participants.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default Journey;
