module.exports = {
    createUserSQL: `
                        INSERT INTO Users
                        VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, SYSDATE())
                        `,
    
    selectUserSQL: `
                        SELECT *
                        FROM Users u
                        WHERE u.id = ?
                        `,

    updateUserSQL: `
                        UPDATE Users
                        SET <replace>
                        WHERE id = ?
                        `,
    
    deleteUserSQL: `
                        DELETE FROM Users
                        WHERE id = ?
                        `
    
}