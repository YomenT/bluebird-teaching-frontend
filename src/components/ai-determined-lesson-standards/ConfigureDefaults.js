import React, { useState } from 'react';
import "../css/ConfigureDefaults.css"
import { db } from '../../firebase.js';

const ConfigureDefaults = ({ onBack, userId }) => {

    const [gradeLevel, setGradeLevel] = useState('');
    const [subject, setSubject] = useState('');

    const saveDefaults = async () => {
        try {
            await db.collection('users').doc(userId).set({
                defaultGradeLevel: gradeLevel,
                defaultSubject: subject
            }, { merge: true });

            console.log('Defaults saved successfully!');
            onBack();
        } catch (error) {
            console.error("Error saving defaults:", error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        saveDefaults();
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