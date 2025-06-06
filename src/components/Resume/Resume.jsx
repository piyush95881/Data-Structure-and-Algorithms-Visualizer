import React, { useEffect } from "react";

const Resume = () => {
    useEffect(() => {
        window.location.href = "https://drive.google.com/drive/folders/1vK4U_06zzNXeiPp8MF0mF8vlqBpXCotT?usp=drive_link";
    }, []);

    return (
        <div style={{ color: "white", padding: "2rem" }}>
            Redirecting to resume...
        </div>
    );
};

export default Resume;
