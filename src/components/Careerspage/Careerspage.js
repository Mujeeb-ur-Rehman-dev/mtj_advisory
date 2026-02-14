import React from 'react';
import ContactForm from '../ContactFrom/ContactForm';
import ApplicationForm from '../ApplicationForm/ApplicationForm';

const Careerspage = () => {
    // Jobs array - easy to add/remove/modify job positions
    const jobs = [
        {
            id: 1,
            title: "Senior Consultant",
            location: "Tulamba, Khanewal",
            type: "Full-time",
            category: "Consulting",
            description: "We're seeking an experienced consultant to lead client projects and mentor junior team members.",
            requirements: ["5+ years experience", "Leadership skills", "Client management"]
        },
        {
            id: 2,
            title: "Business Analyst",
            location: "Remote / Hybrid",
            type: "Full-time",
            category: "Analytics",
            description: "Join our team to analyze business processes and help drive strategic decisions for our clients.",
            requirements: ["3+ years experience", "Analytical thinking", "Process improvement"]
        },
        {
            id: 3,
            title: "Marketing Specialist",
            location: "Tulamba, Khanewal",
            type: "Part-time",
            category: "Marketing",
            description: "Help us grow our brand presence and reach new clients through strategic marketing initiatives.",
            requirements: ["2+ years experience", "Digital marketing", "Content creation"]
        },
        {
            id: 4,
            title: "Junior Developer",
            location: "Remote",
            type: "Full-time",
            category: "Technology",
            description: "Support our technical initiatives and help build digital solutions for our advisory services.",
            requirements: ["1+ years experience", "React/JavaScript", "Problem solving"]
        },
        {
            id: 5,
            title: "Financial Advisor",
            location: "Tulamba, Khanewal",
            type: "Full-time",
            category: "Finance",
            description: "Provide financial guidance and planning services to our clients and help them achieve their financial goals.",
            requirements: ["4+ years experience", "Financial planning", "Client relationship management"]
        },
        // {
        //     id: 6,
        //     title: "HR Coordinator",
        //     location: "Hybrid",
        //     type: "Full-time",
        //     category: "Human Resources",
        //     description: "Support our human resources operations and help create a positive work environment for our team.",
        //     requirements: ["2+ years experience", "HR processes", "Employee relations"]
        // }
    ];

    // State for filtering and pagination
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [filteredJobs, setFilteredJobs] = React.useState(jobs);
    const [selectedJob, setSelectedJob] = React.useState(null);
    const [showJDS, setShowJDS] = React.useState(false);
    const [showApplicationForm, setShowApplicationForm] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const jobsPerPage = 20;

    // Get unique categories for filter buttons
    const categories = ['All', ...new Set(jobs.map(job => job.category))];

    // Filter jobs based on selected category
    React.useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredJobs(jobs);
        } else {
            setFilteredJobs(jobs.filter(job => job.category === selectedCategory));
        }
        // Reset to first page when filtering
        setCurrentPage(1);
    }, [selectedCategory]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    const currentJobs = filteredJobs.slice(startIndex, endIndex);

    // Pagination functions
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };



    const handleApply = (job) => {
        setSelectedJob(job);
        setShowApplicationForm(true);
    };

    const handleViewJDS = (job) => {
        setSelectedJob(job);
        setShowJDS(true);
    };

    const closeJDS = () => {
        setShowJDS(false);
        setSelectedJob(null);
    };

    return(
        <section className="wpo-careers-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        {/* Company Culture Section */}
                        <div className="careers-intro">
                            <div className="row">
                                <div className="col col-lg-8 col-md-12 col-sm-12 col-12">
                                    <h2 style={{ color: '#DB9E30' }}>Join Our Team</h2>
                                    <p>At MTJ Advisory, we believe in fostering a culture of innovation, collaboration, and continuous learning. We're looking for passionate individuals who share our vision of making a positive impact in the advisory and consulting space.</p>
                                    <p>We offer competitive benefits, professional development opportunities, and a supportive work environment where your ideas and contributions are valued.</p>
                                </div>
                                <div className="col col-lg-4 col-md-12 col-sm-12 col-12">
                                    <div className="careers-benefits">
                                        <h3>Why MTJ Advisory?</h3>
                                        <ul>
                                            <li>Practical, business oriented Sharia solutions</li>
                                            <li>Alignment with international Sharia standards</li>
                                            <li>Strong governance and regulatory focus</li>
                                            <li>Cost effective and scalable service models</li>
                                            <li>Trusted advisory for sustainable, Sharia compliant growth</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Current Openings Section */}
                        <div className="current-openings">
                            <h2 style={{ color: '#DB9E30' }}>Current Openings</h2>
                            
                            {/* Filter Buttons */}
                            <div className="filter-section">
                                <div className="filter-buttons">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                                <div className="results-count">
                                    Showing {startIndex + 1}-{Math.min(endIndex, filteredJobs.length)} of {filteredJobs.length} positions
                                    {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
                                </div>
                            </div>
                            
                            <div className="row">
                                {currentJobs.map((job) => (
                                    <div key={job.id} className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="job-card">
                                            <div className="job-header">
                                                <h3>{job.title}</h3>
                                                <span className="job-category">{job.category}</span>
                                            </div>
                                            <p className="job-location">
                                                <i className="fi flaticon-placeholder"></i> {job.location}
                                            </p>
                                            <p className="job-type">
                                                <i className="fi flaticon-time"></i> {job.type}
                                            </p>
                                            <p>{job.description}</p>
                                            <div className="job-requirements">
                                                <strong>Requirements:</strong>
                                                <div className="requirements-grid">
                                                    {job.requirements.map((req, index) => (
                                                        <span key={index} className="requirement-item">{req}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="job-actions">
                                                                                                <button 
                                                    className="careers-theme-btn btn-outline"
                                                    onClick={() => handleViewJDS(job)}
                                                >
                                                    View Details
                                                </button>
                                                <button 
                                                    className="careers-theme-btn"
                                                    onClick={() => handleApply(job)}
                                                >
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Pagination */}
                            <div className="pagination-section">
                                <div className="pagination-info">
                                    <span>Page {currentPage} of {totalPages}</span>
                                </div>
                                <div className="pagination-buttons">
                                    <button 
                                        className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                                        onClick={goToPreviousPage}
                                        disabled={currentPage === 1}
                                    >
                                        <i className="fi flaticon-left-arrow"></i>
                                        Previous
                                    </button>
                                    <button 
                                        className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                                        onClick={goToNextPage}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                        <i className="fi flaticon-right-arrow"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
            </div> 

            {/* JDS Modal */}
            {showJDS && selectedJob && (
                <div className="jds-modal-overlay" onClick={closeJDS}>
                    <div className="jds-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="jds-header">
                            <h2>{selectedJob.title}</h2>
                            <button className="close-btn" onClick={closeJDS}>
                                <i className="fi flaticon-close"></i>
                            </button>
                        </div>
                        
                        <div className="jds-content">
                            <div className="job-meta">
                                <div className="meta-item">
                                    <i className="fi flaticon-placeholder"></i>
                                    <span><strong>Location:</strong> {selectedJob.location}</span>
                                </div>
                                <div className="meta-item">
                                    <i className="fi flaticon-time"></i>
                                    <span><strong>Type:</strong> {selectedJob.type}</span>
                                </div>
                                <div className="meta-item">
                                    <i className="fi flaticon-user"></i>
                                    <span><strong>Department:</strong> {selectedJob.category}</span>
                                </div>
                            </div>

                            <div className="job-description">
                                <h3>Job Description</h3>
                                <p>{selectedJob.description}</p>
                            </div>

                            <div className="job-requirements">
                                <h3>Requirements</h3>
                                <ul>
                                    {selectedJob.requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="job-responsibilities">
                                <h3>Key Responsibilities</h3>
                                <ul>
                                    <li>Collaborate with team members to achieve project objectives</li>
                                    <li>Maintain high standards of quality and professionalism</li>
                                    <li>Contribute to continuous improvement initiatives</li>
                                    <li>Participate in training and development programs</li>
                                </ul>
                            </div>

                            <div className="job-benefits">
                                <h3>What We Offer</h3>
                                <ul>
                                    <li>Competitive salary and benefits package</li>
                                    <li>Professional development opportunities</li>
                                    <li>Flexible work arrangements</li>
                                    <li>Collaborative and inclusive work environment</li>
                                </ul>
                            </div>
                        </div>

                                                 <div className="jds-footer">
                             <button className="careers-theme-btn btn-outline" onClick={closeJDS}>
                                 Close
                             </button>
                             <button className="careers-theme-btn" onClick={() => handleApply(selectedJob)}>
                                 Apply for This Position
                             </button>
                         </div>
                    </div>
                </div>
                         )}

             {/* Application Form Modal */}
             {showApplicationForm && selectedJob && (
                 <div className="application-modal-overlay" onClick={() => setShowApplicationForm(false)}>
                     <div className="application-modal" onClick={(e) => e.stopPropagation()}>
                         <div className="application-header">
                             <h2>Apply for {selectedJob.title} _ {selectedJob?.type} : {selectedJob?.location}</h2>
                             <button className="close-btn" onClick={() => setShowApplicationForm(false)}>
                                 <i className="fi flaticon-close"></i>
                             </button>
                         </div>
                         <div className="application-content">
                             <ApplicationForm 
                                 jobTitle={selectedJob.title}
                                 jobCategory={selectedJob.category}
                                 jobLocation={selectedJob.location}
                                 onClose={() => setShowApplicationForm(false)}
                             />
                         </div>
                     </div>
                 </div>
             )}
         </section>
      )
         
 }

export default Careerspage;
