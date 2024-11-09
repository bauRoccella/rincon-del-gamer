import React from 'react';
import GameOverviewUser from '../components/GameOverviewUser';
import SystemRequirements from '../components/SystemRequirements';
import CommentsSectionUser from '../components/CommentsSectionUser';
import styles from '../styles/GamePage.module.css';

export default function GamePageUser() {
  return (
    <div className={styles.containerGamePage}>
      <GameOverviewUser />
      <SystemRequirements />
      <CommentsSectionUser />
    </div>
  );
}
