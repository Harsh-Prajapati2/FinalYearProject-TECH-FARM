import React from "react";
import Searchbar from "../component/searchbar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../agriculture-theme.css';

function Mainsubsidies() {
    const [subsidyData, setSubsidyData] = useState(null);
    const location = useLocation();
    
    useEffect(() => {
        // Check if we have subsidy data from the navigation state
        if (location.state && location.state.subsidyData) {
            setSubsidyData(location.state.subsidyData);
        } else {
            // Default subsidy data if none provided
            setSubsidyData({
                post_title: "Agriculture Infrastructure Fund",
                post_decrisption: "The Union Cabinet in July 2020 has approved a new pan India Central Sector Scheme called Agriculture Infrastructure Fund (National Agriculture Infra Financing Facility). The scheme shall provide a medium - long term debt financing facility for investment in viable projects for post-harvest management Infrastructure and community farming assets through interest subvention and financial support.",
                subsidy_type: "Infrastructure Fund",
                benefit_amount: "Rs. 1 Lakh Crore Fund",
                duration: "FY2020 to FY2032 (10 years)",
                beneficiaries: [
                    "Agricultural Produce Market Committee",
                    "Agri-Entrepreneur",
                    "Central sponsored Public-Private Partnership Project",
                    "Farmer",
                    "Farmer Producers Organization",
                    "Federation of Farmer Produce Organisations",
                    "Joint Liability Groups",
                    "Local Body sponsored Public-Private Partnership Project",
                    "Marketing Cooperative Society",
                    "Multipurpose Cooperative Society",
                    "National Federations of Cooperatives",
                    "Primary Agricultural Credit Society",
                    "Self Help Group",
                    "Federations of Self Help Groups",
                    "Start-Up",
                    "State Agencies",
                    "State Federations of Cooperatives",
                    "State sponsored Public-Private Partnership Project"
                ]
            });
        }
    }, [location.state]);

    if (!subsidyData) {
        return (
            <>
                <Searchbar />
                <div className="agriculture-container" style={{padding: '60px 20px', textAlign: 'center'}}>
                    <div className="loading-spinner" style={{
                        width: '50px',
                        height: '50px',
                        border: '3px solid #f3f3f3',
                        borderTop: '3px solid var(--agriculture-secondary)',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        margin: '0 auto 20px'
                    }}></div>
                    <p>Loading subsidy details...</p>
                </div>
            </>
        );
    }

    return (
        <>
            <Searchbar/>
            <div className="agriculture-container">
                {/* Hero Section */}
                <div className="subsidy-hero" style={{
                    background: 'linear-gradient(135deg, var(--agriculture-secondary), var(--agriculture-accent))',
                    padding: '80px 20px',
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><path d=\'M0 0h100v100H0z\' fill=\'none\'/><path d=\'M20 20h60v60H20z\' fill=\'%23ffffff\' opacity=\'0.1\'/></svg>") repeat',
                        opacity: 0.1
                    }}></div>
                    
                    <div style={{position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto'}}>
                        <h1 style={{
                            fontSize: '3rem',
                            fontWeight: '700',
                            marginBottom: '20px',
                            lineHeight: '1.2'
                        }}>
                            {subsidyData.post_title}
                        </h1>
                        
                        {subsidyData.subsidy_type && (
                            <div style={{
                                display: 'inline-block',
                                background: 'rgba(255,255,255,0.2)',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                marginTop: '20px'
                            }}>
                                {subsidyData.subsidy_type}
                            </div>
                        )}
                        
                        {subsidyData.duration && (
                            <div style={{
                                marginTop: '20px',
                                fontSize: '1.2rem',
                                opacity: '0.9'
                            }}>
                                Duration: {subsidyData.duration}
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '60px 20px'
                }}>
                    <div className="subsidy-content agriculture-card" style={{
                        background: 'white',
                        borderRadius: '15px',
                        padding: '40px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        marginBottom: '40px'
                    }}>
                        
                        {/* Benefits Section */}
                        {subsidyData.benefit_amount && (
                            <div className="benefits-highlight" style={{
                                background: 'var(--agriculture-light)',
                                padding: '30px',
                                borderRadius: '12px',
                                marginBottom: '40px',
                                textAlign: 'center'
                            }}>
                                <h2 style={{
                                    color: 'var(--agriculture-secondary)',
                                    fontSize: '1.8rem',
                                    marginBottom: '15px'
                                }}>
                                    Fund Allocation
                                </h2>
                                <p style={{
                                    fontSize: '2rem',
                                    fontWeight: '700',
                                    color: 'var(--agriculture-primary)',
                                    margin: 0
                                }}>
                                    {subsidyData.benefit_amount}
                                </p>
                            </div>
                        )}

                        {/* Description */}
                        <div style={{marginBottom: '40px'}}>
                            <h2 style={{
                                color: 'var(--agriculture-secondary)',
                                fontSize: '2rem',
                                marginBottom: '20px',
                                borderBottom: '3px solid var(--agriculture-light)',
                                paddingBottom: '10px'
                            }}>
                                Scheme Description
                            </h2>
                            
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: '#555',
                                marginBottom: '30px',
                                textAlign: 'justify'
                            }}>
                                {subsidyData.post_decrisption}
                            </p>
                        </div>

                        {/* Beneficiaries Section */}
                        {subsidyData.beneficiaries && (
                            <div style={{marginBottom: '40px'}}>
                                <h3 style={{
                                    color: 'var(--agriculture-primary)',
                                    fontSize: '1.8rem',
                                    marginBottom: '25px'
                                }}>
                                    Intended Beneficiaries
                                </h3>
                                
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '15px'
                                }}>
                                    {subsidyData.beneficiaries.map((beneficiary, index) => (
                                        <div key={index} style={{
                                            background: '#f8f9fa',
                                            padding: '15px 20px',
                                            borderRadius: '8px',
                                            borderLeft: '4px solid var(--agriculture-secondary)',
                                            fontSize: '1rem',
                                            color: '#333'
                                        }}>
                                            <i className="fas fa-check-circle" style={{
                                                color: 'var(--agriculture-accent)',
                                                marginRight: '10px'
                                            }}></i>
                                            {beneficiary}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Application Process */}
                        <div className="application-section" style={{
                            background: 'var(--agriculture-secondary)',
                            color: 'white',
                            padding: '30px',
                            borderRadius: '12px',
                            textAlign: 'center'
                        }}>
                            <h3 style={{marginBottom: '15px', fontSize: '1.5rem'}}>
                                📋 Ready to Apply?
                            </h3>
                            <p style={{marginBottom: '20px', fontSize: '1.1rem'}}>
                                Contact your local agriculture office or visit the official government portal for application procedures.
                            </p>
                            <div className="agriculture-btn" style={{
                                display: 'inline-block',
                                background: 'white',
                                color: 'var(--agriculture-secondary)',
                                padding: '12px 30px',
                                borderRadius: '25px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}>
                                Get Application Details →
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </>
    )
} export default Mainsubsidies