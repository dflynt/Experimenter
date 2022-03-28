module.exports = {
    createInstructorSQL: `
                            INSERT INTO Instructors
                            VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, SYSDATE())
                            `,

    selectInstructorSQL: `
                            SELECT *
                            FROM Instructors i
                            WHERE i.id = ?
                            `,

    deleteInstructorSQL: `
                            DELETE FROM Instructors
                            WHERE id = ?`,

    updateInstructorSQL: `
                            UPDATE Instructors
                            SET <replace>
                            WHERE id = ?
                            `
}