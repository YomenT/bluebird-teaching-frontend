import React, { useState } from 'react';
import "../css/ConfigureDefaults.css"

const ConfigureDefaults = ({ onBack }) => {

    const [gradeLevel, setGradeLevel] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = { gradeLevel, subject };
        console.log(formData); 

        onBack();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', marginBottom: '20px', gap: '20px' }}>
                    <div>
                        <label htmlFor="gradeLevel" style={{ marginRight: '10px' }}>Grade Level:</label>
                        <select
                            id="gradeLevel"
                            value={gradeLevel}
                            onChange={(e) => setGradeLevel(e.target.value)}
                            required>
                            <option value="">Select Grade Level</option>
                            <option value="K">Kindergarten</option>
                            <option value="1">1st Grade</option>
                            <option value="2">2nd Grade</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="subject" style={{ marginRight: '10px' }}>Subject:</label>
                        <select
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required>
                            <option value="">Select Subject</option>
                            <option value="Math">Math</option>
                            <option value="Science">Science</option>
                            <option value="English">English</option>
                        </select>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" onClick={onBack}>Back</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};

export default ConfigureDefaults