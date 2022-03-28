module.exports = {
    createExperimentSQL: `
                            INSERT INTO Experiments
                            VALUES (UUID(), ?, ?, SYSDATE(), ?, ?, 0, 0, null, 0, null)
                            `,

    updateExperimentSQL: `
                            UPDATE Experiments
                            SET <replace>
                            WHERE id = ?
                            `,

    deleteExperimentSQL: `
                            DELETE FROM Experiments
                            WHERE id = ?
                            `,

    selectExperimentSQL: `
                            SELECT *
                            FROM Experiments e
                            WHERE e.id = ?
                            `,

    selectAllExperimentsSQL: `
                                SELECT *
                                FROM Experiments e
                                WHERE e.author = ?
                                `,
    
    deleteAllExperimentsSQL: `
                                DELETE FROM Experiments
                                WHERE author = ?
                                `
}