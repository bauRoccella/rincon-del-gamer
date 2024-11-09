import React from 'react';
import GameOverviewBusiness from '../components/GameOverviewBusiness';
import SystemRequirements from '../components/SystemRequirements';
import CommentsSectionBusiness from '../components/CommentsSectionBusiness';
import styles from '../styles/GamePage.module.css';

export default function GamePageBusiness() {
  return (
    <div className={styles.containerGamePage}>
      <GameOverviewBusiness />
      <SystemRequirements />
      <CommentsSectionBusiness />
    </div>
  );
}
