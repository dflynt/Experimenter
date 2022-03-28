module.exports = {
    createInstitutionSQL: `
                            INSERT INTO Institutions 
                            VALUES (UUID(), ?, ?, ?, ?, ?, SYSDATE(), SYSDATE())
                            `,

    selectInstitutionSQL: `
                            SELECT *
                            FROM Institutions i
                            where i.id = ?
                            `,

    deleteInstitutionSQL: `
                            DELETE FROM Institutions
                            WHERE id = ?
                            `
}