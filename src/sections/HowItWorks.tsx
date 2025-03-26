import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    Tabs,
    Tab,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    useTheme
} from '@mui/material';

// Define TypeScript interface for subsections to properly handle optional emphasize property
interface Subsection {
    title: string;
    icon: React.ReactElement; // Change from ReactNode to ReactElement
    items: string[];
    emphasize?: string; // Make emphasize optional with the ? modifier
}
import { useState } from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StarsIcon from '@mui/icons-material/Stars';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WorkIcon from '@mui/icons-material/Work';

const HowItWorks = () => {
    const theme = useTheme();
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    // Data for each main system section
    const systemSections: {
        id: string;
        label: string;
        icon: React.ReactElement; // Specify React.ReactElement instead of ReactNode
        content: {
            title: string;
            description: string;
            subsections: Subsection[];
        }
    }[] = [
        {
            id: 'credits',
            label: 'Credit System',
            icon: <PaidIcon />,
            content: {
                title: 'The Platform Credit System',
                description: 'Platform Credits are the foundation of our learning economy, enabling universal access to education while rewarding valuable contributions.',
                subsections: [
                    {
                        title: 'Earning Credits',
                        icon: <CreditScoreIcon />,
                        items: [
                            'Receiving engagement with your published educational resources',
                            'Providing mentorship and guidance to learners',
                            'Offering high-quality project feedback and reviews',
                            'Contributing valuable improvements to the platform',
                            'Translating existing content for global access',
                            'Participating actively in platform governance'
                        ]
                    },
                    {
                        title: 'Using Credits',
                        icon: <PaidIcon />,
                        items: [
                            'Accessing premium learning content as a learner',
                            'Booking mentorship sessions for personalized guidance',
                            'Publishing new educational resources (requires initial credit investment)',
                            'Investing in content development and enhancement',
                            'Unlocking advanced platform features and tools'
                        ]
                    },
                    {
                        title: 'Initial Access',
                        icon: <VerifiedUserIcon />,
                        items: [
                            'All users receive 250 starter credits upon registration',
                            'Verified professionals receive additional bonus credits',
                            'Free introductory content requires no credits',
                            'Clear pathways to earn more credits from day one'
                        ]
                    },
                    {
                        title: 'Content Publishing Investment Model',
                        icon: <MonetizationOnIcon />,
                        items: [
                            'Publishing content requires an initial investment of either credits OR fiat currency',
                            'This investment covers content hosting, distribution, and quality assurance',
                            'Creators later earn returns through learner engagement with their content',
                            'Higher quality content typically generates more engagement and greater returns',
                            'The investment model ensures content quality while enabling sustainability'
                        ]
                    },
                    {
                        title: 'The Treasury System',
                        icon: <AccountBalanceIcon />,
                        items: [
                            'Platform collects a 5% fee from all monetary transactions',
                            'Fees accumulate in the platform treasury fund',
                            'Treasury resources fund essential educational infrastructure',
                            'Domain experts receive treasury funding for creating core learning content',
                            'This ensures financial sustainability while maintaining educational quality'
                        ]
                    }
                ]
            }
        },
        {
            id: 'mentorship',
            label: 'Mentorship Marketplace',
            icon: <SchoolIcon />,
            content: {
                title: 'The Mentorship Marketplace',
                description: 'Our tiered mentorship system creates opportunities for everyone to teach and learn according to their expertise level.',
                subsections: [
                    {
                        title: 'Peer Learning',
                        icon: <PersonIcon />,
                        items: [
                            'Knowledge exchange between learners at similar levels',
                            'Structured framework for mutual support',
                            'Credit incentives for helpful guidance',
                            'Building teaching skills while reinforcing learning'
                        ],
                        emphasize: 'Credit-Based'
                    },
                    {
                        title: 'Emerging Expert',
                        icon: <EmojiPeopleIcon />,
                        items: [
                            'Demonstrated skills through project completion',
                            'Structured guidance in specific expertise areas',
                            'Building reputation through effective teaching',
                            'Earning credits for future learning opportunities'
                        ],
                        emphasize: 'Primarily Credit-Based'
                    },
                    {
                        title: 'Professional Expert',
                        icon: <WorkIcon />,
                        items: [
                            'Verified industry professionals',
                            'Direct financial compensation',
                            'Credit incentives for offering discounted sessions',
                            'Investment opportunities for earned credits'
                        ],
                        emphasize: 'Premium Rates'
                    },
                    {
                        title: 'Domain Authority',
                        icon: <StarsIcon />,
                        items: [
                            'Recognized leaders in specialized fields',
                            'Premium compensation appropriate to expertise',
                            'Treasury funding for core educational infrastructure',
                            'Platform support for maximum impact'
                        ],
                        emphasize: 'Premium Rates + Treasury'
                    }
                ]
            }
        },
        {
            id: 'projects',
            label: 'Project-Based Validation',
            icon: <AssignmentIcon />,
            content: {
                title: 'Project-Based Skill Validation',
                description: 'Projects form the core of our learning approach, providing practical application and skill verification.',
                subsections: [
                    {
                        title: 'Project Structure',
                        icon: <AccountTreeIcon />,
                        items: [
                            'Real-world relevance and application',
                            'Graduated complexity aligned with learning progression',
                            'Built-in verification points for knowledge application',
                            'Structured documentation for portfolio presentation',
                            'Expert-designed evaluation criteria'
                        ]
                    },
                    {
                        title: 'Mentorship Integration',
                        icon: <SchoolIcon />,
                        items: [
                            'Critical checkpoints for expert guidance',
                            'Structured feedback frameworks',
                            'Direct knowledge transfer through applied problem-solving',
                            'Visible improvement through iterative development',
                            'Clear demonstration of skill acquisition'
                        ]
                    },
                    {
                        title: 'Portfolio Development',
                        icon: <WorkIcon />,
                        items: [
                            'Progressive skill demonstration through project sequence',
                            'Professional-quality documentation standards',
                            'Public sharing options with appropriate privacy controls',
                            'Expert endorsement mechanisms for quality validation',
                            'Direct connection to professional opportunities'
                        ]
                    }
                ]
            }
        },
        {
            id: 'flexible-paths',
            label: 'Flexible Publishing',
            icon: <AccountBalanceWalletIcon />,
            content: {
                title: 'Flexible Publishing Pathways',
                description: 'Our platform provides multiple paths to content creation and publication, ensuring everyone can contribute regardless of financial circumstances.',
                subsections: [
                    {
                        title: 'Financial Resources Path',
                        icon: <MonetizationOnIcon />,
                        items: [
                            'Direct investment using currency',
                            'Immediate publishing capabilities',
                            'Standard quality review process',
                            'Full attribution and earning potential',
                            'Same earning opportunities as contribution path'
                        ]
                    },
                    {
                        title: 'Contribution Path',
                        icon: <CreditScoreIcon />,
                        items: [
                            'Earn credits through platform contributions',
                            'Invest earned credits in content publication',
                            'Identical quality standards and process',
                            'Equal earning potential and attribution',
                            'Merit-based pathway requiring no financial investment'
                        ]
                    },
                    {
                        title: 'Hybrid Approaches',
                        icon: <AccountBalanceWalletIcon />,
                        items: [
                            'Combine financial resources and earned credits',
                            'Strategic investment in high-value content',
                            'Reinvestment of earnings into new content',
                            'Portfolio development across multiple domains',
                            'Balanced approach to platform participation'
                        ]
                    }
                ]
            }
        }
    ];

    return (
        <Container maxWidth="lg" className="fade-in">
            <Box className="section">
                <Typography variant="h2" component="h1" className="section-title" gutterBottom>
                    How Discimmy Works
                </Typography>

                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', maxWidth: '900px', mb: 4 }}>
                    Discimmy's innovative learning platform operates through interconnected systems that create a 
                    balanced ecosystem where everyone can both teach and learn. Explore how our credit system, 
                    mentorship marketplace, and project-based approach work together to democratize education.
                </Typography>

                {/* Visualization placeholder */}
                <Paper
                    sx={{
                        height: 180,
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
                        Infographic showing credit flow through the platform ecosystem
                    </Typography>
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '120%',
                            height: '120%',
                            background: 'radial-gradient(circle at center, rgba(63, 81, 181, 0.3) 0%, rgba(63, 81, 181, 0.7) 70%)',
                            opacity: 0.7,
                            zIndex: 1,
                        }}
                    />
                </Paper>

                {/* Systems tabs */}
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    aria-label="platform systems tabs"
                    sx={{
                        mb: 5,
                        '.MuiTabs-indicator': {
                            height: 3,
                            borderRadius: '3px 3px 0 0',
                        }
                    }}
                >
                    {systemSections.map((section, index) => (
                        <Tab
                            key={section.id}
                            icon={section.icon}
                            label={section.label}
                            sx={{
                                textTransform: 'none',
                                fontWeight: selectedTab === index ? 600 : 400,
                                fontSize: '1rem',
                            }}
                        />
                    ))}
                </Tabs>

                {/* Content for current tab */}
                {systemSections.map((section, sectionIndex) => (
                    <Box key={section.id} sx={{ display: selectedTab === sectionIndex ? 'block' : 'none' }}>
                        <Typography variant="h3" component="h3" gutterBottom color="primary.main">
                            {section.content.title}
                        </Typography>
                        
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 4 }}>
                            {section.content.description}
                        </Typography>
                        
                        <Grid container spacing={4}>
                            {section.content.subsections.map((subsection, subIndex) => (
                                <Grid item xs={12} md={6} key={subIndex}>
                                    <Card sx={{ 
                                        height: '100%', 
                                        borderRadius: 2,
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                                        }
                                    }}>
                                        <CardContent sx={{ p: 3 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                <Box sx={{ 
                                                    mr: 2, 
                                                    color: theme.palette.primary.main,
                                                    display: 'flex'
                                                }}>
                                                    {subsection.icon}
                                                </Box>
                                                <Typography variant="h5" component="h4" gutterBottom>
                                                    {subsection.title}
                                                    {subsection.emphasize && (
                                                        <Typography 
                                                            component="span" 
                                                            variant="body2" 
                                                            sx={{ 
                                                                ml: 1, 
                                                                color: 'text.secondary',
                                                                backgroundColor: theme.palette.grey[100],
                                                                px: 1,
                                                                py: 0.5,
                                                                borderRadius: 1,
                                                                display: 'inline-block',
                                                                verticalAlign: 'middle',
                                                            }}
                                                        >
                                                            {subsection.emphasize}
                                                        </Typography>
                                                    )}
                                                </Typography>
                                            </Box>
                                            
                                            <Divider sx={{ mb: 2 }} />
                                            
                                            <List dense>
                                                {subsection.items.map((item, itemIndex) => (
                                                    <ListItem key={itemIndex} alignItems="flex-start" sx={{ py: 0.75 }}>
                                                        <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                                                            <CheckCircleIcon color="primary" fontSize="small" />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={item}
                                                            primaryTypographyProps={{
                                                                variant: 'body1',
                                                                sx: { lineHeight: 1.4 }
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default HowItWorks;