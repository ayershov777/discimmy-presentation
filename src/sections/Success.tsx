import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Tabs,
    Tab,
    Avatar,
    Divider,
    Paper,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    useTheme
} from '@mui/material';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';

// Success stories data from the markdown document
const successStories = [
    {
        name: "Dr. Rodriguez",
        title: "From Academic to Educational Entrepreneur",
        icon: <SchoolIcon />,
        startingPoint: "AI research professor with deep expertise but limited reach beyond academia",
        milestones: [
            {
                title: "First Three Months",
                points: [
                    "Published \"AI Ethics Framework\" premium curriculum using expert bonus credits",
                    "Began mentoring industry professionals at €120/hour",
                    "Offered discounted sessions to promising researchers, earning investment credits",
                    "Developed comprehensive \"Applied Neural Networks\" pathway",
                    "Established reputation as a practical AI educator"
                ]
            },
            {
                title: "Six Months In",
                points: [
                    "Launched specialized AI learning domains with premium subscription options",
                    "Created structured mentorship program with sliding scale pricing",
                    "Began receiving passive income from published content",
                    "Secured treasury funding for essential educational infrastructure",
                    "Developed workshop series purchased by technology companies"
                ]
            },
            {
                title: "One Year Impact",
                points: [
                    "Generates €8,500 monthly through combined revenue streams",
                    "Reaches thousands of learners globally instead of dozens locally",
                    "Maintains commitment to accessibility through credit-based access options",
                    "Reinvests in collaborative content creation with other experts",
                    "Achieves greater impact and income than traditional academic path"
                ]
            }
        ]
    },
    {
        name: "Miguel",
        title: "From Local Developer to Industry Leader",
        icon: <CodeIcon />,
        startingPoint: "Software developer with 8 years of experience in Latin American tech sector",
        milestones: [
            {
                title: "First Three Months",
                points: [
                    "Published specialized \"Latin American Developer's Guide to Enterprise Systems\" using starter and bonus credits",
                    "Provided targeted mentorship to junior developers at $45/hour",
                    "Offered discounted sessions to developers from underserved communities",
                    "Invested earned credits into producing bilingual technical tutorials",
                    "Built reputation in Spanish-language developer community"
                ]
            },
            {
                title: "Six Months In",
                points: [
                    "Received treasury funding to develop comprehensive \"Enterprise System Architecture\" curriculum",
                    "Established premium mentorship program with 25 regular clients",
                    "Created technical certification program with direct value for regional employers",
                    "Developed hybrid payment model combining credits and currency",
                    "Began receiving consistent passive income from published content"
                ]
            },
            {
                title: "One Year Impact",
                points: [
                    "Generates approximately $2,800 monthly through combined revenue streams",
                    "Created structured enterprise training programs purchased by regional companies",
                    "Maintains balanced ecosystem of free and premium content",
                    "Invests portion of earnings into advanced technical curriculum development",
                    "Established sustainable business model while expanding career opportunities"
                ]
            }
        ]
    },
    {
        name: "Sarah",
        title: "From Beginner to Professional Developer",
        icon: <PersonIcon />,
        startingPoint: "Marketing assistant with interest in web development but no technical background",
        milestones: [
            {
                title: "First Three Months",
                points: [
                    "Completed foundational web development pathway using starter credits",
                    "Earned additional credits through peer feedback and documentation",
                    "Built first collaborative projects with peer learning group",
                    "Created helpful resources for other beginners",
                    "Developed confidence in technical capabilities"
                ]
            },
            {
                title: "Six Months In",
                points: [
                    "Mastered intermediate frameworks by reinvesting earned credits",
                    "Led a learning community focused on frontend development",
                    "Created valuable beginner guides that earned substantial credits",
                    "Received targeted mentorship from professionals",
                    "Built several portfolio-worthy projects demonstrating real skills"
                ]
            },
            {
                title: "One Year Impact",
                points: [
                    "Completed advanced technical curriculum without financial investment",
                    "Built impressive portfolio showcasing professional-level capabilities",
                    "Secured three job interviews based on platform achievements",
                    "Successfully transitioned careers without formal education costs",
                    "Began mentoring newcomers while continuing advanced learning"
                ]
            }
        ]
    },
    {
        name: "Priya",
        title: "Expanding Impact and Opportunity",
        icon: <SchoolIcon />,
        startingPoint: "Experienced mathematics teacher with limited reach beyond local schools",
        milestones: [
            {
                title: "First Three Months",
                points: [
                    "Created specialized teaching methodology resources using professional bonus credits",
                    "Began mentoring new teachers at locally appropriate rates",
                    "Offered discounted sessions to rural educators, earning investment credits",
                    "Developed practical classroom resources for low-resource settings",
                    "Built community of educators sharing specialized knowledge"
                ]
            },
            {
                title: "Six Months In",
                points: [
                    "Established reputation as regional educational expert",
                    "Created premium teacher training with global accessibility",
                    "Developed specialized mentorship program for educators",
                    "Received treasury funding for rural education curriculum",
                    "Began earning passive income from published content"
                ]
            },
            {
                title: "One Year Impact",
                points: [
                    "Generates income equivalent to 3x previous teaching salary",
                    "Reaches educators and students across multiple regions",
                    "Creates educational impact far beyond local classroom",
                    "Maintains commitment to accessibility through scaled pricing",
                    "Achieves professional growth impossible in traditional roles"
                ]
            }
        ]
    },
    {
        name: "Alex",
        title: "Successful Career Transition Professional",
        icon: <BarChartIcon />,
        startingPoint: "Finance professional seeking transition to data science with transferable skills but technical gaps",
        milestones: [
            {
                title: "First Three Months",
                points: [
                    "Completed data science foundations using starter credits",
                    "Earned additional credits by providing financial domain insights to the community",
                    "Joined collaborative learning groups focused on practical data analysis",
                    "Created visualizations explaining financial concepts in data context",
                    "Provided peer feedback on projects from his financial perspective"
                ]
            },
            {
                title: "Six Months In",
                points: [
                    "Advanced to intermediate curriculum using credits earned through financial domain contributions",
                    "Facilitated study sessions in financial data analysis",
                    "Created specialized resources connecting finance and data science",
                    "Invested earned credits in targeted mentorship from data science professionals",
                    "Built portfolio of projects applying data science to financial problems"
                ]
            },
            {
                title: "One Year Impact",
                points: [
                    "Completed advanced learning pathways without monetary expenditure",
                    "Established specialized expertise at the intersection of finance and data science",
                    "Began offering mentorship in his specialized niche",
                    "Created valuable cross-domain resources building significant reputation",
                    "Successfully transitioned careers through skills and portfolio developed on platform"
                ]
            }
        ]
    },
    {
        name: "Elena",
        title: "Community Building Specialist",
        icon: <GroupsIcon />,
        startingPoint: "Educational program manager with 10 years of experience in community building",
        milestones: [
            {
                title: "First Three Months",
                points: [
                    "Participated in Learner Experience Committee, providing professional-level feedback",
                    "Earned credits through high-quality contributions to platform improvement initiatives",
                    "Created valuable documentation on effective educational communities",
                    "Developed cross-domain learning group frameworks based on professional experience",
                    "Invested credits in developing comprehensive community guidelines"
                ]
            },
            {
                title: "Six Months In",
                points: [
                    "Invited to paid governance advisory role due to professional expertise",
                    "Developed \"Inclusive Learning\" initiative with professional stipend",
                    "Invested earned credits in creating professional-level frameworks for community assessment",
                    "Offered part-time platform consultant position focused on community health",
                    "Built comprehensive community facilitation resources with platform support"
                ]
            },
            {
                title: "One Year Impact",
                points: [
                    "Established formal professional relationship with platform leadership",
                    "Created educational community consulting practice with platform as major client",
                    "Developed community certification program with appropriate compensation",
                    "Maintained significant volunteer contributions alongside paid professional work",
                    "Balanced platform mission advancement with fair compensation for expertise"
                ]
            }
        ]
    }
];

const Success = () => {
    const theme = useTheme();
    const [selectedStory, setSelectedStory] = useState(0);

    const handleStoryChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedStory(newValue);
    };

    return (
        <Container maxWidth="lg" className="fade-in">
            <Box className="section">
                <Typography variant="h2" component="h1" className="section-title" gutterBottom>
                    Success Stories
                </Typography>

                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', maxWidth: '900px', mb: 4 }}>
                    Discover how diverse users have transformed their careers, expanded their impact, and
                    achieved their goals using Discimmy's unique learning approach. These real-world examples
                    demonstrate the platform's effectiveness for learners, experts, and organizations.
                </Typography>

                {/* Story selector tabs */}
                <Tabs
                    value={selectedStory}
                    onChange={handleStoryChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="success stories tabs"
                    sx={{
                        mb: 4,
                        '.MuiTabs-indicator': {
                            height: 3,
                            borderRadius: '3px 3px 0 0',
                        }
                    }}
                >
                    {successStories.map((story, index) => (
                        <Tab
                            key={index}
                            label={story.name}
                            icon={story.icon}
                            iconPosition="start"
                            sx={{
                                textTransform: 'none',
                                fontWeight: selectedStory === index ? 600 : 400,
                                minHeight: '72px',
                                fontSize: '1rem',
                            }}
                        />
                    ))}
                </Tabs>

                {/* Current story display */}
                {successStories.map((story, storyIndex) => (
                    <Box key={storyIndex} sx={{ display: selectedStory === storyIndex ? 'block' : 'none' }}>
                        <Card sx={{ mb: 4, borderRadius: 2, overflow: 'visible', position: 'relative' }}>
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Avatar
                                        sx={{
                                            bgcolor: theme.palette.primary.main,
                                            width: 56,
                                            height: 56,
                                            mr: 2
                                        }}
                                    >
                                        {story.icon}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h4" component="h3" gutterBottom>
                                            {story.name}
                                        </Typography>
                                        <Typography variant="h6" color="primary.dark">
                                            {story.title}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Divider sx={{ mb: 3, mt: 2 }} />

                                <Box sx={{ mb: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1, border: '1px solid', borderColor: 'divider' }}>
                                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                        Starting Point
                                    </Typography>
                                    <Typography variant="body1">
                                        {story.startingPoint}
                                    </Typography>
                                </Box>

                                <Stepper orientation="vertical" sx={{ mt: 4 }}>
                                    {story.milestones.map((milestone, milestoneIndex) => (
                                        <Step key={milestoneIndex} active={true} completed={true}>
                                            <StepLabel
                                                StepIconProps={{
                                                    sx: {
                                                        color: milestoneIndex === 0 ? theme.palette.primary.light :
                                                            milestoneIndex === 1 ? theme.palette.primary.main :
                                                                theme.palette.secondary.main
                                                    }
                                                }}
                                            >
                                                <Typography variant="h6" component="span">
                                                    {milestone.title}
                                                </Typography>
                                            </StepLabel>
                                            <StepContent>
                                                <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                                                    {milestone.points.map((point, pointIndex) => (
                                                        <Box
                                                            component="li"
                                                            key={pointIndex}
                                                            sx={{
                                                                mb: 1.5,
                                                                '&::marker': {
                                                                    color: milestoneIndex === 0 ? theme.palette.primary.light :
                                                                        milestoneIndex === 1 ? theme.palette.primary.main :
                                                                            theme.palette.secondary.main
                                                                }
                                                            }}
                                                        >
                                                            <Typography variant="body1">
                                                                {point}
                                                            </Typography>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </StepContent>
                                        </Step>
                                    ))}
                                </Stepper>
                            </CardContent>
                        </Card>
                    </Box>
                ))}

                {/* Visualization Placeholder */}
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
                        Real Results for Real People
                    </Typography>
                    <Typography variant="body1" sx={{ my: 2 }}>
                        Interactive timeline showing transformative journeys with key milestones and achievements
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default Success;