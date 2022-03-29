module.exports = {
    generateLicenseSQL: `
                            INSERT INTO Licenses
                            VALUES (UUID(), ?, SYSDATE(), null)
                            `,
    
    selectLicenseSQL: `
                        SELECT *
                        FROM Licenses
                        WHERE id = ?
                        `,

    updateLicenseSQL: `
                        UPDATE Licenses
                        SET <replace>
                        WHERE id = ?
                        `,

    deleteLicenseSQL: `
                        DELETE FROM Licenses
                        WHERE id = ?
                        `
}