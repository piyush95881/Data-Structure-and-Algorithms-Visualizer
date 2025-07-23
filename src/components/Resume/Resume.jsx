import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Open resume in new tab
        window.open(
            "https://drive.google.com/drive/folders/1vK4U_06zzNXeiPp8MF0mF8vlqBpXCotT?usp=drive_link",
            "_blank",
            "noopener,noreferrer"
        );

        // Redirect this tab back to home
        navigate("/");
    }, [navigate]);

    return (
        <div style={{ color: "white", padding: "2rem" }}>
            Redirecting to resume...
        </div>
    );
};

export default Resume;
