import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = ({ jobTitle, jobCategory, jobLocation, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: '',
        resumeUrl: '',
        resumeFileName: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log("JWER");
            // Check file size (max 1.5MB)
            if (file.size > 1.5 * 1024 * 1024) {
                setErrors(prev => ({
                    ...prev,
                    resume: 'File size must be less than 1.5MB'
                }));
                return;
            }
            // Check file type
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(file.type)) {
                setErrors(prev => ({
                    ...prev,
                    resume: 'Please upload PDF, DOC, or DOCX files only'
                }));
                return;
            }

            // Upload to Cloudinary
            try {
                const formData = new FormData();
                formData.append('file', file);
                console.log("File", file);
                formData.append('upload_preset', 'ml_default'); // Your restricted preset
                formData.append('cloud_name', 'dzvncrldb');
                const response = await fetch(
                    'https://api.cloudinary.com/v1_1/dzvncrldb/raw/upload',
                    { method: 'POST', body: formData }
                );
                
                if (!response.ok) {
                    throw new Error('Upload failed');
                }
                
                const result = await response.json();
                
                // Console log the URL for now
                console.log('File uploaded successfully:', {
                    url: result.secure_url,
                    fileName: file.name,
                    fileSize: file.size,
                    uploadId: result.public_id
                });
                
                // Store URL and filename
                setFormData(prev => ({
                    ...prev,
                    resumeUrl: result.secure_url,
                    resumeFileName: file.name
                }));
                
                setErrors(prev => ({
                    ...prev,
                    resume: ''
                }));
                
            } catch (error) {
                console.error('Upload error:', error);
                setErrors(prev => ({
                    ...prev,
                    resume: 'Upload failed: ' + error.message
                }));
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } 
        // else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        //     newErrors.phone = 'Please enter a valid phone number';
        // }

        if (!formData.coverLetter.trim()) {
            newErrors.coverLetter = 'Cover Letter is required';
        } else if (formData.coverLetter.length < 40) {
            newErrors.coverLetter = 'Cover Letter must be at least 40 characters long';
        }

        if (!formData.resumeUrl) {
            newErrors.resume = 'Resume/CV is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Prepare data according to backend entity structure
            const submitData = {
                applicant_name: formData.fullName,
                email: formData.email,
                phone_number: formData.phone,
                resume_url: formData.resumeUrl,
                cover_letter: formData.coverLetter,
                // Note: project_id and department_id are nullable in backend
                // You can add these later if needed
                // project_id: null,
                // department_id: null
            };

            // Call backend API
            const response = await fetch('http://[::1]:3000/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit application');
            }

            const result = await response.json();
            console.log('Application submitted successfully:', result);

            // Success - you can redirect or show success message
            alert('Application submitted successfully! We will contact you soon.');
            onClose();
            
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('There was an error submitting your application. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="application-form-container">
            {/* <div className="job-info">
                <h3>Position Details</h3>
                <div className="job-details">
                    <span><strong>Department:</strong> {jobCategory}</span>
                    <span><strong>Location:</strong> {jobLocation}</span>
                </div>
            </div> */}

            <form onSubmit={handleSubmit} className="application-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name *</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={errors.fullName ? 'error' : ''}
                            placeholder="Enter your full name"
                        />
                        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={errors.email ? 'error' : ''}
                            placeholder="Enter your email address"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={errors.phone ? 'error' : ''}
                            placeholder="Enter your phone number"
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="resume">Resume/CV *</label>
                        {!formData.resumeUrl ? (
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                disabled
                                onChange={handleFileChange}
                                className={errors.resume ? 'error' : ''}
                                accept=".pdf,.doc,.docx"
                            />
                        ) : (
                            <div className="file-uploaded">
                                <div className="file-info">
                                    <i className="fi flaticon-file"></i>
                                    <span className="file-name">{formData.resumeFileName}</span>
                                </div>
                                <button 
                                    type="button" 
                                    className="change-file-btn"
                                    onClick={() => setFormData(prev => ({ 
                                        ...prev, 
                                        resumeUrl: '', 
                                        resumeFileName: '' 
                                    }))}
                                >
                                    Change File
                                </button>
                            </div>
                        )}
                        {errors.resume && <span className="error-message">{errors.resume}</span>}
                        <small className="help-text">Accepted formats: PDF, DOC, DOCX. Maximum file size: 1.5MB</small>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="coverLetter">Cover Letter *</label>
                    <textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        className={errors.coverLetter ? 'error' : ''}
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                        rows="6"
                    />
                    {errors.coverLetter && <span className="error-message">{errors.coverLetter}</span>}
                    <small className="help-text">Minimum 100 characters. Tell us about your relevant experience and why you want to join our team.</small>
                </div>

                <div className="form-actions">
                    <button
                        type="button"
                        className="careers-theme-btn btn-outline"
                        onClick={onClose}
                        disabled={isSubmitting}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="careers-theme-btn" 
                        disabled
                        // disabled={isSubmitting || Object.keys(errors).length > 0 || !formData.fullName || !formData.email || !formData.phone || !formData.coverLetter || !formData.resumeUrl}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ApplicationForm;
