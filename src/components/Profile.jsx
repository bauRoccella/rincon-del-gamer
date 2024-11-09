import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import styles from "../styles/Profile.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Profile() {
    const { user } = useContext(AppContext); 
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (user.roles.some((role) => role.name === "User")) {
                    const data = await getUserProfile();
                    setProfileData(data);
                    console.log(profileData);
                } else if (user.roles.some((role) => role.name === "Business")) {
                    const data = await getBusinessProfile();
                    setProfileData(data);
                    setAvatarUrl(data.profilePicture); // Si es Business tendrá un logo
                    console.log(profileData);
                }
            } catch (error) {
                setError('Error al cargar el perfil');
            }
        };

        fetchProfile();
    }, [user]);

    if (!profileData) {
        return <p>Cargando perfil...</p>;
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatarUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setAvatarUrl(null);
    };

    return (
        <div className={styles.profileContainer}>
            {user.roles.some((role) => role.name === "User") ? (
                <>
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}>Información Personal</h2>
                        <div className={styles.infoBoxes}>
                            <div className={styles.userInfoBox}>
                                <label className={styles.infoLabel}>Nombre</label>
                                <p className={styles.infoValue}>{profileData.name}</p>
                                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                            </div>
                            <div className={styles.userInfoBox}>
                                <label className={styles.infoLabel}>Fecha de nacimiento</label>
                                <p className={styles.infoValue}>{profileData.birthDay}</p>
                                <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
                            </div>
                            <div className={styles.userInfoBox}>
                                <label className={styles.infoLabel}>Correo</label>
                                <p className={styles.infoValue}>{profileData.email}</p>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionTitle}>Información Empresarial</h2>
                        <div className={styles.infoBoxes}>
                            <div className={styles.userInfoBox}>
                                <label className={styles.infoLabel}>Empresa</label>
                                <p className={styles.infoValue}>{profileData.name}</p>
                                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                            </div>
                            <div className={styles.userInfoBox}>
                                <label className={styles.infoLabel}>Correo</label>
                                <p className={styles.infoValue}>{profileData.email}</p>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Profile;
